import Form from "../../components/Form";
import { Link } from "react-router-dom";
import { useAuthStore, useFormStore, useMerchantStore } from "../../store/auth/auth";
import LeftSide from "../../components/Form/LeftSide";
import User from "../../types/User";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { toast } from 'react-toastify';
import { useEffect, useState } from "react";


const schema = yup.object({
    email: yup.string().required(),
    password: yup
        .string()
        .required()
        .matches(
            /^(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{}[\]:;<>,.?])(.{8,})$/,
            "Password must start with a capital letter and contain at least one special character"
        ),
}).required();

type Inputs = {
    email: string;
    password: string;
};


export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };
    const { getUserData } = useMerchantStore()
    const { email, password, } = useFormStore();
    const { login, loading, error, errorMsg } = useAuthStore()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>(
        {
            defaultValues: {
                email: "",
                password: "",
            },
            resolver: yupResolver(schema),
        }
    )


    useEffect(() => {
        if (error) {
            notify();
        }
    }, [error]);
    const notify = () => {
        toast(errorMsg);
        useAuthStore.setState({ error: false });
    };

    const onsubmit = async (data: Inputs) => {
        const user: User = { email, password }
        login(user)
        getUserData(user)
        await login(data)
    }


    return (
        <div className="flex">
            <LeftSide />
            <section className="py-8 h-screen w-[90%] max-w-sm min-w-[12rem] mx-auto flex flex-col justify-between gap-8  xl:w-1/2 xl:justify-center">
                <Form
                    title="Login to account"
                    description="Enter your details below to login to your account"
                    span="Forgot Password?"
                    onSubmit={handleSubmit(onsubmit)}
                    children={
                        <>
                            <label className="pb-5 space-y-1 text-sm font-bold text-gray-500">
                                <span>
                                    Email
                                </span>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-greenMain focus:border-transparent"
                                    placeholder="Email"
                                    {...register("email")}
                                />
                                {errors.email && (<p className="text-xs text-red-400 capitalize">{errors.email.message}</p>)}
                            </label>


                            <label className="relative space-y-1 text-sm font-bold text-gray-500">
                                <span>
                                    Password
                                </span>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-greenMain focus:border-transparent"
                                    placeholder="Password"
                                    {...register("password")}
                                />

                                <div className="absolute right-0 w-5 mr-3 top-7 text-greenMain" onClick={handleTogglePassword} >
                                    {
                                        showPassword ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-eye "><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3"
                                            />
                                            </svg>)
                                            : (<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-eye-off"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" /></svg>
                                            )
                                    }
                                </div>

                                {errors.password && (<p className="text-xs text-red-400 capitalize">{errors.password.message}</p>)}
                            </label>

                            <Link
                                to="forgot-password"
                            >
                                <span className="text-sm font-bold cursor-pointer text-greenMain"
                                >
                                    Forgot Password?
                                </span>
                            </Link>
                        </>
                    }
                />
            </section>
        </div>
    )
}