import React from "react";

export interface ButtonProps {
  /**
   * The text to display in the button
   */
  text: string;

  /**
   * The function to call when the button is clicked
   */
  onClick?: () => void;

  /**
   * The button style variant
   */
  variant?: "primary" | "secondary";
}

/**
 * Basic button component with text and variant styling
 */
export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = "primary",
}) => {
  // In a real component, this would use proper styling from your design system
  const styles = {
    button: {
      padding: "8px 16px",
      borderRadius: "4px",
      cursor: "pointer",
      fontWeight: "bold",
      border: "none",
      backgroundColor: variant === "primary" ? "#0070f3" : "#f5f5f5",
      color: variant === "primary" ? "white" : "#333",
    },
  };

  return (
    <button onClick={onClick} style={styles.button}>
      {text}
    </button>
  );
};
