import Form from "../../components/Form";
import Logo from "../../components/Logo";
import Input from "../../components/Form/Input";
import { password_validation } from "../../utils/inputValidations";
import LeftSide from "../../components/Form/LeftSide";




export default function SetupPassword() {
    return (
        <div className="flex">
            <LeftSide />
            <section className="py-8 h-screen w-[90%] max-w-sm min-w-[12rem] mx-auto flex flex-col justify-between gap-8">
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