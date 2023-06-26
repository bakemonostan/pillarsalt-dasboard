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
}

export default function Form({ children, description, title, span, onSubmit, onclick, btnLabel = 'Next' }: FormProps) {
    const [type, setType] = useState<'login' | 'forgot' | 'setup'>('login')


    return (
        <form onSubmit={onSubmit} className="h-full flex flex-col w-full  xl:space-y-16  xl:justify-center ">
            <Logo />
            <div className="space-y-12 pt-10 xl:pt-5">
                <div className="space-y-4">
                    <h2 className="font-bold text-2xl xl:text-4xl">
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
            <div className=" mt-auto mb-10 xl:mb-32 w-full" >
                <Button label={btnLabel} variant="primary" type="submit" />
            </div>
        </form>
    )
}