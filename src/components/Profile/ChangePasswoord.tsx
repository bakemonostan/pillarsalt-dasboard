import { useProfileStore } from "../../store/profileStore";
import { email_validation, password_validation } from "../../utils/inputValidations";
import Button from "../Button/Button";
import Input from "../Form/Input";
import { useChangePasswordStore } from "../../store/auth/changePassword";
import { motion } from "framer-motion";



export default function ChangePasswoord() {
    const { setView } = useProfileStore()
    const {
        passwords,
        setOldPassword,
        setNewPasswordValue,
        setConfirmPassword,
        setNewPassword,
        error,
        errorMessage,
    } = useChangePasswordStore()
    const handleChangeOldPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOldPassword(e.target.value);
    };

    const handleChangeNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPasswordValue(e.target.value);
    };

    const handleChangeConfirmPassword = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setConfirmPassword(e.target.value);
    };

    const handleCancel = () => {
        // Clear all password fields
        setOldPassword("");
        setNewPasswordValue("");
        setConfirmPassword("");

        // Go back to a different view
        setView("profile");
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await setNewPassword(passwords.oldPassword, passwords.newPassword, passwords.confirmPassword);
        // Clear all password fields
        setOldPassword("");
        setNewPasswordValue("");
        setConfirmPassword("");

    };

    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-extrabold text-headers">
                    Security
                </h1>
                <div onClick={() => { setView("profile") }}>
                    <Button label="Go To Profile" type="button" variant="primary"></Button>
                </div>
            </div>

            <div className="mx-auto space-y-5 2xl:mx-0 sm:w-3/5">
                <form onSubmit={handleSubmit}>
                    <div className="pb-8 space-y-5">
                        <Input
                            {...password_validation}
                            value={passwords.oldPassword}
                            onchange={handleChangeOldPassword}
                            label="Old Password"
                            placeholder="Enter Old Password"
                        />
                        <Input
                            value={passwords.newPassword}
                            onchange={handleChangeNewPassword}
                            {...password_validation}
                            label="New Password"
                            placeholder="Enter new password"
                            type="password"
                        />
                        <Input
                            {...password_validation}
                            value={passwords.confirmPassword}
                            onchange={handleChangeConfirmPassword}
                            label="New Password"
                            placeholder="Enter new password again"
                            type="password"
                        />

                        {error && <motion.span className="text-xs text-red-500"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >{errorMessage}
                        </motion.span>}
                    </div>
                    <div className="flex w-full gap-2 md:w-1/4 md:ml-auto ">
                        <button
                            className="px-3 bg-transparent border rounded-md cursor-pointer border-greenMain text-greenMain"
                            type="button"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                        <Button label="Save Changes" type="submit" variant="primary" ></Button>
                    </div>
                </form>
            </div>


        </>
    )
}