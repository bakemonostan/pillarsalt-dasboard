import Form from "../../components/Form";
import Input from "../../components/Form/Input";
import { Link, Navigate } from "react-router-dom";
import { email_validation, password_validation } from "../../utils/inputValidations";
import { useAuthStore, useFormStore, useMerchantStore } from "../../store/auth/auth";
import LeftSide from "../../components/Form/LeftSide";
import User from "../../types/User";
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

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



    const { getUserData } = useMerchantStore()
    const { email, password, setEmail, setPassword } = useFormStore();
    const { login, loading } = useAuthStore()
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


                            <label className="space-y-1 text-sm font-bold text-gray-500">
                                <span>
                                    Password
                                </span>
                                <input
                                    type="password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-greenMain focus:border-transparent"
                                    placeholder="Password"
                                    {...register("password")}
                                />
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