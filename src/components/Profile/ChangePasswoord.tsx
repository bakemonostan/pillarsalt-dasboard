import { useProfileStore } from "../../store/profileStore";
import { email_validation, password_validation } from "../../utils/inputValidations";
import Button from "../Button/Button";
import Input from "../Form/Input";
import profileIcon from '/images/icon-holder.svg'


export default function ChangePasswoord() {
    const { setView } = useProfileStore()
    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-headers font-extrabold text-xl">
                    Security
                </h1>
                <div onClick={() => { setView("profile") }}>
                    <Button label="Go To Profile" type="button" variant="primary"></Button>
                </div>
            </div>

            <div className="mx-auto 2xl:mx-0 sm:w-3/5 space-y-5">
                <form >
                    <div className="space-y-5 pb-8">
                        <Input
                            onchange={() => { }}
                            value=""
                            {...password_validation}
                            label="Old Password"
                            placeholder="Enter Old Password"
                        />
                        <Input
                            onchange={() => { }}
                            value=""
                            {...password_validation}
                            label="New Password"
                            placeholder="Enter new password"
                            type="password"
                        />
                        <Input
                            onchange={() => { }}
                            value=""
                            {...password_validation}
                            label="New Password"
                            placeholder="Enter new password again"
                            type="password"
                        />
                    </div>
                    <div className="flex gap-2 w-full md:w-1/4 md:ml-auto ">
                        <button className="border border-greenMain bg-transparent text-greenMain rounded-md px-3 cursor-pointer" type="button" >Cancel</button>
                        <Button label="Save Changes" type="submit" variant="primary" ></Button>
                    </div>
                </form>
            </div>


        </>
    )
}