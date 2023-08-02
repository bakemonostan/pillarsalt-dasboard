import Form from "../../components/Form";
import Logo from "../../components/Logo";
import Input from "../../components/Form/Input";
import { password_validation } from "../../utils/inputValidations";
import LeftSide from "../../components/Form/LeftSide";
import { AES, enc, mode, pad } from 'crypto-js';
import { useEffect, useState } from "react";
import { useSetupPasswordStore } from "../../store/auth/setupPassword";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";


export default function SetupPassword() {
    const [showResult, setShowResult] = useState('');
    const { password, setPassword, confirmPassword, setUpPassword, setConfirmPassword, error, errorMessage } = useSetupPasswordStore()
    const [email, setEmail] = useState<string | null>('');
    const location = useLocation();

    useEffect(() => {
        const extractEmailFromLink = (url: string) => {
            const emailStart = url.indexOf('email=');
            if (emailStart === -1) return null;
            const emailEnd = url.indexOf('&', emailStart);
            const emailFromLink =
                emailEnd === -1 ? url.slice(emailStart + 6) : url.slice(emailStart + 6, emailEnd);
            return emailFromLink;
        };

        // Extract the email from the current URL
        const emailFromURL = extractEmailFromLink(location.search);

        // Set the email state
        setEmail(emailFromURL);
    }, []);

    const navigate = useNavigate();

    let cipher = 'xtxeBZ4tk395ijwmJPfAUt/MiJvKVW9EJHzNvN1xLD8=';
    let decryptionKey = '8080808080808080';

    // useEffect(() => {
    //     try {
    //         let bytes = AES.decrypt(cipher, decryptionKey, {
    //             mode: mode.ECB,
    //             padding: pad.NoPadding,
    //             keysize: 128
    //         });

    //         let text = bytes.toString(enc.Utf8);
    //         console.log('Decrypted Data:', text);

    //         try {
    //             let parsedData = JSON.parse(text);
    //             setShowResult(parsedData);
    //         } catch (jsonError) {
    //             console.error('JSON parsing error:', jsonError);
    //         }
    //     } catch (error) {
    //         console.error('Decryption error:', error);
    //     }
    // }, []);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUpPassword(email, password, confirmPassword)

    }

    return (
        <div className="flex">
            <LeftSide />
            <section className="py-8 h-screen w-[90%] max-w-sm min-w-[12rem] mx-auto flex flex-col justify-between gap-8">
                <Form
                    title="Welcome,"
                    description="Complete your account set up by providing a password"
                    span="Forgot Password?"
                    onSubmit={handleSubmit}
                    children={
                        <>
                            <Input
                                {...password_validation}
                                onchange={(e) => setPassword(e.target.value)}
                                value={password}
                                label="Password"
                            />
                            <Input
                                {...password_validation}
                                value={confirmPassword}
                                label="Confirm Password"
                                onchange={(e) => setConfirmPassword(e.target.value)}

                            />
                            {error && <motion.span className="text-xs text-red-500"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >{errorMessage}
                            </motion.span>}
                        </>
                    }
                />

            </section>
        </div>
    )
}