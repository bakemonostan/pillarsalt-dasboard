import { ChangeEvent, useEffect, useState } from "react"
import LeftSide from "../../components/Form/LeftSide"
import Logo from "../../components/Logo/Logo"
import { useProfileStore } from "../../store/profileStore"
import Button from "../../components/Button/Button"
import { Link } from "react-router-dom"
import { authApi } from "../../config/api"
import { toast } from 'react-toastify';
import axios, { AxiosError } from "axios"

type ServerError = { message: string };

type Props = {}
export default function VerifyEmail({ }: Props) {
    const [tokens, setTokens] = useState(["", "", "", "", "", ""]);
    const { getUserProfile, userProfile } = useProfileStore()
    useEffect(() => {
        getUserProfile()
        console.log(userProfile)
    }, [])
    const handleTokenChange = (index: number, value: string) => {
        const newTokens = [...tokens];
        newTokens[index] = value;
        setTokens(newTokens);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        // check if all tokens are filled
        if (tokens.some((token) => token === "" || token === undefined)) {
            toast.error("Please fill all the fields");
            return;
        }

        try {
            const code = tokens.join("");
            await authApi.post("/Account/confirm-email", { userId: userProfile.userId, token: code, });
            toast.success("Email verified successfully");
            setTokens(["", "", "", "", "", ""]);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const serverError = error as AxiosError<ServerError>;
                toast.error(`Error : ${serverError.response?.data.message}`);
            }
        };
    };

    return (
        <div className="flex ">
            <LeftSide />
            <section className="py-8 h-screen w-[90%] max-w-sm min-w-[12rem] mx-auto flex flex-col lg:space-y-28 space-y-10 gap-8">
                <div>
                    <Logo />
                </div>
                <div className="space-y-5 lg:space-y-14">
                    <Link to='/login/forgot-password' className="block w-7">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                    </Link>
                    <div>
                        <h1 className="lg:font-bold lg:text-xl">
                            Verify Email
                        </h1>
                        <p>
                            We sent a verification code to <span className="font-semibold text-greenMain">{userProfile.email}</span>. Please input the code
                        </p>
                    </div>
                    <form className="flex flex-col justify-between gap-14" onSubmit={handleSubmit}>
                        <div className="flex gap-2">
                            {tokens.map((token, index) => (
                                <span
                                    key={index}
                                    className="block w-12 h-12 px-4 py-2 text-lg font-semibold text-center border rounded-md"
                                >
                                    <input
                                        type="number"
                                        className="w-full h-full bg-transparent focus:outline-none"
                                        value={token}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                            handleTokenChange(index, e.target.value)
                                        }
                                        maxLength={1}
                                    />
                                </span>
                            ))}
                        </div>

                        <div className="pt-14">
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