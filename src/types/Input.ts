interface InputProps {
  name?: string;
  type: string;
  value: string;
  placeholder: string | undefined;
  label?: string;
  required?: boolean;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  classes?: string;
  isdisabled?: boolean;
}

export default InputProps;
