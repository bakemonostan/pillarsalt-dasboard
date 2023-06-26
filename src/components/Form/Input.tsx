import InputProps from "../../types/Input"


export default function Input({
    label,
    name,
    placeholder,
    required,
    type,
    value,
    classes,
    isdisabled,
    onchange
}: InputProps) {
    return (
        <div className="w-full ">
            <label htmlFor={label} className="flex flex-col gap-1">
                {label}
                <input
                    type={type}
                    required={required}
                    placeholder={placeholder}
                    value={value}
                    name={name}
                    onChange={onchange}
                    className={`border rounded-md p-2 ${classes}`}
                    disabled={isdisabled}
                />
            </label>
        </div>
    )
}