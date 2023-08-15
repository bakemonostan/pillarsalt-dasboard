import { useState } from "react";
import Logo from "../Logo";

import Button from "../Button/Button";
import { useAuthStore } from "../../store/auth/auth";

interface FormProps {
    title: string;
    description: string;
    children: React.ReactNode;
    span?: string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onclick?: () => void;
    btnLabel?: string;
    isRecaptcha?: boolean;
}

export default function Form({ children, description, title, span, onSubmit, onclick, btnLabel = 'Next', isRecaptcha = true }: FormProps) {
    const [type, setType] = useState<'login' | 'forgot' | 'setup'>('login')


    return (
        <form onSubmit={onSubmit} className="flex flex-col w-full h-full xl:space-y-16 xl:justify-center ">
            <Logo />
            <div className="pt-10 space-y-12 xl:pt-5">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold xl:text-4xl">
                        {title}
                    </h2>
                    <p className="text-[.9rem] text-opacity-60 text-black xl:text-md">
                        {description}
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    {children}
                </div>
            </div>
            <div className="w-full mt-auto mb-10 xl:mb-32" >
                <Button label={btnLabel} variant="primary" type="submit" isDisabled={!isRecaptcha} />
            </div>
        </form>
    )
}