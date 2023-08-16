import { useState } from "react";
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
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };
    return (
        <div className="w-full ">
            <label htmlFor={label} className="relative flex flex-col gap-1">
                {label}
                <input
                    type={showPassword ? 'text' : type}
                    required={required}
                    placeholder={placeholder}
                    value={value}
                    name={name}
                    onChange={onchange}
                    className={`border rounded-md p-2 ${classes}`}
                    disabled={isdisabled}
                />
                {type === 'password' && (
                    <div className="absolute top-0 bottom-0 right-0 w-5 mb-5 mr-3 translate-y-1/2 text-greenMain" onClick={handleTogglePassword} >
                        {
                            showPassword ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-eye "><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3"
                                />
                                </svg>)
                                : (<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-eye-off"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" /></svg>
                                )
                        }
                    </div>
                )}
            </label>
        </div>
    )
}


//

// import React, { useState } from 'react';
// import InputProps from '../../types/Input';

// export default function Input({
//     label,
//     name,
//     placeholder,
//     required,
//     type,
//     value,
//     classes,
//     isdisabled,
//     onchange
// }: InputProps) {
//     const [showPassword, setShowPassword] = useState(false);

//     const handleTogglePassword = () => {
//         setShowPassword(prevShowPassword => !prevShowPassword);
//     };

//     return (
//         <div className="w-full ">
//             <label htmlFor={label} className="flex flex-col gap-1">
//                 {label}
//                 <div className="flex items-center">
//                     <input
//                         type={showPassword ? 'text' : type}
//                         required={required}
//                         placeholder={placeholder}
//                         value={value}
//                         name={name}
//                         onChange={onchange}
//                         className={`border rounded-md p-2 ${classes}`}
//                         disabled={isdisabled}
//                     />
//                     {type === 'password' && (
//                         <button
//                             type="button"
//                             onClick={handleTogglePassword}
//                             className="ml-2 focus:outline-none"
//                         >
//                             {showPassword ? 'Hide' : 'Show'}
//                         </button>
//                     )}
//                 </div>
//             </label>
//         </div>
//     );
// }



