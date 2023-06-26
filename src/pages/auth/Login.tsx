import Form from "../../components/Form";
import Input from "../../components/Form/Input";
import { Link, Navigate } from "react-router-dom";
import { email_validation, password_validation } from "../../utils/inputValidations";
import { useAuthStore, useFormStore, useMerchantStore } from "../../store/auth/auth";
import LeftSide from "../../components/Form/LeftSide";
import User from "../../types/User";



export default function Login() {
    const { getUserData, userData } = useMerchantStore()

    const { email, password, setEmail, setPassword } = useFormStore();
    const { login, loading } = useAuthStore()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user: User = { email, password }
        login(user)
        getUserData(user)
    }


    return (
        <div className="flex">
            <LeftSide />
            <section className="py-8 h-screen w-[90%] max-w-sm min-w-[12rem] mx-auto flex flex-col justify-between gap-8  xl:w-1/2 xl:justify-center">
                <Form
                    title="Login to account"
                    description="Enter your details below to login to your account"
                    span="Forgot Password?"
                    onSubmit={handleSubmit}
                    children={
                        <>
                            <Input
                                {...email_validation}
                                value={email}
                                onchange={(e) => setEmail(e.target.value)}
                            />
                            <Input
                                {...password_validation}
                                value={password}
                                onchange={(e) => setPassword(e.target.value)}
                                label="Password"
                            />
                            <Link
                                to="forgot-password"
                            >
                                <span className="text-greenMain font-bold text-sm cursor-pointer"
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