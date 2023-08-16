import Button from "../../components/Button/Button";
import Form from "../../components/Form";
import Input from "../../components/Form/Input";
import { email_validation } from "../../utils/inputValidations";
import LeftSide from "../../components/Form/LeftSide";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useResetPasswordStore } from "../../store/auth/auth";
import { toast } from 'react-toastify';


export default function ForgotPassword() {
    const [isRecaptchaPassed, setIsRecaptchaPassed] = useState(false);
    const recaptchaRef = React.createRef<ReCAPTCHA>()
    const SITE_KEY = JSON.stringify(import.meta.env.VITE_SITE_KEY)?.replace(/['"]+/g, '');
    function handleRecaptchaSuccess() {
        setIsRecaptchaPassed(true);
    }
    const navigate = useNavigate();
    const { email, setEmail, handleForgotPassword, errorMsg, error } = useResetPasswordStore()
    useEffect(() => {
        if (error) {
            notify();
        }
    }, [error]);
    const notify = () => {
        toast(errorMsg);
        useResetPasswordStore.setState({ error: false });
    };

    const handleSuccess = () => {
        navigate('/login/verify-email');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        handleForgotPassword(email, handleSuccess);
    }


    return (
        <div className="flex ">
            <LeftSide />
            <section className="py-8 h-screen w-[90%] max-w-sm min-w-[12rem] mx-auto flex flex-col justify-between gap-8">
                <Form
                    title="Forget Password?"
                    description="Please input your email below"
                    btnLabel="Proceed"
                    onSubmit={handleSubmit}
                    isRecaptcha={isRecaptchaPassed}
                    children={
                        <>
                            <Link to='/login' className="w-32 mb-5 cursor-pointer">
                                <Button
                                    type="button"
                                    label="Back"
                                    variant="primary"
                                />
                            </Link>
                            <Input
                                {...email_validation}
                                onchange={(e) => setEmail(e.target.value)}
                                value={email}
                                label="Email"
                                placeholder="Enter your email"

                            />
                            <ReCAPTCHA
                                type="image"
                                ref={recaptchaRef}
                                size="normal"
                                sitekey={SITE_KEY}
                                onChange={handleRecaptchaSuccess}
                                className=""
                            />

                        </>
                    }
                />
            </section>
        </div>
    )
}