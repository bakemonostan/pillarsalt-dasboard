interface ButtonProps {
  type?: "button" | "submit" | "reset";
  label?: string;
  onClick?: () => void;
  isDisabled?: boolean;
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
}

export default ButtonProps;
