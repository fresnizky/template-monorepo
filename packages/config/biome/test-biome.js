#!/usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

// Colors for console output
const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
};

console.log(`${colors.blue}Biome Configuration Test${colors.reset}`);
console.log("=======================\n");

// Directories to test
const testDirs = ["base", "react", "node", "react-native"];

// Path to test file
const testFilePath = path.join(__dirname, "test", "test.js");

// Create a temporary biome.json file for testing
function createTempConfig(configType) {
  const tempDir = path.join(__dirname, "temp");
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }

  const configContent = {
    extends: [`../${configType}/biome.json`],
  };

  const tempConfigPath = path.join(tempDir, "biome.json");
  fs.writeFileSync(tempConfigPath, JSON.stringify(configContent, null, 2));

  return tempDir;
}

// Copy test file to temp directory
function copyTestFile(tempDir) {
  const targetPath = path.join(tempDir, "test.js");
  fs.copyFileSync(testFilePath, targetPath);
  return targetPath;
}

// Run Biome check
function runBiomeCheck(tempDir) {
  try {
    const result = execSync("npx biome check .", {
      cwd: tempDir,
      stdio: "pipe",
      encoding: "utf-8",
    });
    return { success: true, output: result };
  } catch (error) {
    console.log(`${colors.red}Error details:${colors.reset}`);
    console.log(`Exit code: ${error.status}`);
    if (error.stderr) {
      console.log(`stderr: ${error.stderr}`);
    }
    return { success: false, output: error.stdout };
  }
}

// Run Biome format
function runBiomeFormat(tempDir) {
  try {
    const result = execSync("npx biome format --write .", {
      cwd: tempDir,
      stdio: "pipe",
      encoding: "utf-8",
    });
    return { success: true, output: result };
  } catch (error) {
    console.log(`${colors.red}Formatting error details:${colors.reset}`);
    console.log(`Exit code: ${error.status}`);
    if (error.stderr) {
      console.log(`stderr: ${error.stderr}`);
    }
    return { success: false, output: error.stdout };
  }
}

// Test each configuration
for (const configType of testDirs) {
  console.log(
    `${colors.yellow}Testing ${configType} configuration${colors.reset}`
  );
  console.log("--------------------------");

  const tempDir = createTempConfig(configType);
  const testFile = copyTestFile(tempDir);

  // Run linting
  console.log(`Running Biome check with ${configType} config...`);
  const checkResult = runBiomeCheck(tempDir);
  console.log(checkResult.output);
  console.log(
    `Linting ${
      checkResult.success ? `${colors.green}PASSED` : `${colors.red}FAILED`
    }${colors.reset}\n`
  );

  // Run formatting
  console.log(`Running Biome format with ${configType} config...`);
  const formatResult = runBiomeFormat(tempDir);
  console.log(formatResult.output);
  console.log(
    `Formatting ${
      formatResult.success ? `${colors.green}PASSED` : `${colors.red}FAILED`
    }${colors.reset}\n`
  );

  // Compare the formatted file
  console.log(`${configType} formatted test file:`);
  console.log("--------------------------");
  const formattedContent = fs.readFileSync(testFile, "utf-8");
  console.log(formattedContent);
  console.log("--------------------------\n");
}

// Clean up
const tempDir = path.join(__dirname, "temp");
if (fs.existsSync(tempDir)) {
  fs.rmSync(tempDir, { recursive: true, force: true });
}

console.log(`${colors.green}Test completed.${colors.reset}`);
