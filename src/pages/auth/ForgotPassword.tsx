import Button from "../../components/Button/Button";
import Form from "../../components/Form";
import Logo from "../../components/Logo";
import Input from "../../components/Form/Input";
import { email_validation } from "../../utils/inputValidations";
import LeftSide from "../../components/Form/LeftSide";


export default function ForgotPassword() {
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
                        </>
                    }
                />
            </section>
        </div>
    )
}