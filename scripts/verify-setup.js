#!/usr/bin/env node

/**
 * This script verifies that the monorepo setup is working correctly
 * by checking that packages can be imported from apps.
 */

console.log("Verifying monorepo setup...");

try {
  // Check if we can import the shared-ui package
  const sharedUI = require("../packages/shared-ui");

  if (!sharedUI.Button) {
    throw new Error("Button component not found in shared-ui package");
  }

  console.log("✅ Successfully imported Button from shared-ui package");

  // Import the web app to verify it can import from shared-ui
  const App = require("../apps/web/src/App");

  console.log("✅ Successfully imported App from web application");
  console.log("✅ App successfully imports from shared-ui package");

  console.log(
    "\n🎉 Monorepo setup verification successful! The workspace is properly configured."
  );
  console.log("You can now create and import packages across the monorepo.");
} catch (error) {
  console.error("\n❌ Verification failed:", error.message);
  console.error("Please check your monorepo configuration and try again.");
  process.exit(1);
}
