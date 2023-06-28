import Button from "../../components/Button/Button";
import Form from "../../components/Form";
import Logo from "../../components/Logo";
import Input from "../../components/Form/Input";
import { email_validation } from "../../utils/inputValidations";
import LeftSide from "../../components/Form/LeftSide";
import ReCAPTCHA from "react-google-recaptcha";
import React from "react";

export default function ForgotPassword() {
    const recaptchaRef = React.createRef<ReCAPTCHA>()
    const SITE_KEY = JSON.stringify(import.meta.env.VITE_SITE_KEY).replace(/['"]+/g, '');
    console.log(SITE_KEY)
    return (
        <div className="flex ">
            <LeftSide />
            <section className="py-8 h-screen w-[90%] max-w-sm min-w-[12rem] mx-auto flex flex-col justify-between gap-8">
                <Form
                    title="Forget Password?"
                    description="Please input your email below"
                    onSubmit={() => { }}
                    children={
                        <>
                            <Input
                                {...email_validation}
                                onchange={() => { }}
                                value=""
                            />
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                size="normal"
                                sitekey={SITE_KEY}
                                onChange={() => { }}
                                className=""
                            />
                        </>
                    }
                />
            </section>
        </div>
    )
}