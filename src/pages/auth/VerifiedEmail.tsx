import { Link } from "react-router-dom"
import LeftSide from "../../components/Form/LeftSide"
import Logo from "../../components/Logo/Logo"
import Button from "../../components/Button/Button"
import Input from "../../components/Form/Input"
import React from "react"
import { toast } from 'react-toastify';
import { authApi } from "../../config/api"
import { useProfileStore } from "../../store/profileStore"
import axios, { AxiosError } from "axios"
// sever error type

type ServerError = {
    title?: string;
}


type Props = {}
export default function VerifiedEmail({ }: Props) {
    const { getUserProfile, userProfile } = useProfileStore()
    const [password, setPassword] = React.useState<string>("")
    const [confirmPassword, setConfirmPassword] = React.useState<string>("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            toast.error("Passwords do not match")
        } else {
            try {
                await authApi.post("/Account/complete-forget-password-reset", { userId: userProfile.userId, });
                toast.success("Email verified successfully");
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    const serverError = error as AxiosError<ServerError>;
                    toast.error(`Where is the OTP being gotten from? The OTP is needed in response. **EHIZ`);
                }
            };
        }
    }
    return (
        <div className="flex ">
            <LeftSide />
            <section className="py-8 h-screen w-[90%] max-w-sm min-w-[12rem] mx-auto flex flex-col lg:space-y-28 space-y-10 gap-8">
                <div>
                    <Logo />
                </div>
                <div className="space-y-5 lg:space-y-14">
                    <Link to='/login/verify-email' className="block w-7">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                    </Link>
                    <div>
                        <h1 className="lg:font-bold lg:text-xl">
                            Verified!
                        </h1>
                        <p>
                            You can now set a new password
                        </p>
                    </div>
                    <form className="flex flex-col justify-between gap-14" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-10">
                            <Input
                                type="password"
                                placeholder="New Password"
                                onchange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                            />

                            <Input
                                type="password"
                                placeholder="Confirm Password"
                                onchange={(e) => setConfirmPassword(e.target.value)}
                                value={confirmPassword}
                                required
                            />

                        </div>

                        <div >
                            <Button
                                type="submit"
                                label="Proceed"
                            >Proceed
                            </Button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}