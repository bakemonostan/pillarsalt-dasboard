import Form from "../../components/Form";
import Logo from "../../components/Logo";
import Input from "../../components/Form/Input";
import { password_validation } from "../../utils/inputValidations";
import LeftSide from "../../components/Form/LeftSide";
import { useLocation } from "react-router-dom";
import { AES, enc, mode, pad } from 'crypto-js';
import { useEffect, useState } from "react";


export default function SetupPassword() {
    const [showResult, setShowResult] = useState('');

    const path = useLocation()
    let cipher = 'JB4C+L/Lt76KMbOGM5Qp32TdWxPDiiwse61kOOpMprM='
    let decryptionKey = '8080808080808080';

    useEffect(() => {
        try {
            let bytes = AES.decrypt(cipher, decryptionKey, {
                mode: mode.ECB,
                padding: pad.NoPadding,
                keysize: 128
            });

            let text = bytes.toString(enc.Utf8);
            console.log('Decrypted Data:', text);

            try {
                let parsedData = JSON.parse(text);
                setShowResult(parsedData);
            } catch (jsonError) {
                console.error('JSON parsing error:', jsonError);
            }
        } catch (error) {
            console.error('Decryption error:', error);
        }
    }, []);



    return (
        <div className="flex">
            <LeftSide />
            <section className="py-8 h-screen w-[90%] max-w-sm min-w-[12rem] mx-auto flex flex-col justify-between gap-8">
                {showResult === '' ? 'Meh' : 'Decrypted Content: ' + showResult}
                <Form
                    title="Welcome,"
                    description="Complete your account set up by providing a password"
                    span="Forgot Password?"
                    onSubmit={() => { }}
                    children={
                        <>
                            <Input
                                {...password_validation}
                                onchange={() => { }}
                                value=""
                                label="Password"
                            />
                            <Input
                                {...password_validation}
                                onchange={() => { }}
                                value=""
                            />
                        </>
                    }
                />

            </section>
        </div>
    )
}