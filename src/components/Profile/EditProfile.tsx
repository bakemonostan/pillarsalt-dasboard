import { merchantApi } from "../../config/api";
import { useAuthStore } from "../../store/auth/auth";
import { useProfileStore } from "../../store/profileStore";
// import {use}
import Button from "../Button/Button";
import Input from "../Form/Input";
import profileIcon from '/images/icon-holder.svg'


export default function EditProfile() {
    const { setFormField, formFields, setView, userProfile } = useProfileStore();
    const { profileId } = useAuthStore();
    const { acquirerId, merchantRef } = userProfile;

    console.log(profileId, acquirerId, merchantRef)

    const handleInput = (field: string, value: string) => {
        setFormField(field, value)
    }


    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const response = await merchantApi.put('Configuration/update-marchant-detail', {
            profileId,
            acquirerId,
            merchantRef,
            ...formFields
        })
    }

    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-extrabold text-headers">
                    Profile
                </h1>
                <div onClick={() => { setView("change") }}>
                    <Button label="Change Password" type="button" variant="primary" ></Button>
                </div>
            </div>

            <div className="w-full p-4 py-8 pb-24 mx-auto space-y-4 bg-white rounded-md shadow-lg lg:w-full lg:max-w-full xl:mx-0">
                {/* head */}
                <div className="flex items-center gap-3 pb-5">
                    <img src={profileIcon} alt="" />
                    <p>James Ajayi</p>
                </div>

                <div className="space-y-5">
                    <h2 className="text-sm font-extrabold text-headers lg:text-xl">
                        Personal Information
                    </h2>
                    <hr />
                </div>

                <form className="" onSubmit={handleSubmit}>
                    <div className="w-full space-y-5 md:w-3/5">
                        <div className="flex flex-col w-full ">
                            <div className="flex flex-wrap w-full gap-2 md:gap-8 md:flex-nowrap">
                                <Input label="First name"
                                    onchange={(e) => { handleInput('firstName', e.target.value) }}
                                    placeholder="First name"
                                    type="text"
                                    value={formFields.firstName}
                                    required={true}
                                />
                                <Input
                                    label="Last name"
                                    onchange={(e) => { handleInput('lastName', e.target.value) }}
                                    placeholder="Last name"
                                    type="text"
                                    value={formFields.lastName}
                                    required={true}

                                />
                            </div>
                            <div className="flex flex-wrap w-full gap-2 md:gap-8 md:flex-nowrap">
                                <Input
                                    label="Contact person"
                                    onchange={(e) => { handleInput('contactPerson', e.target.value) }}
                                    placeholder="Contact person"
                                    type="text"
                                    value={formFields.contactPerson}
                                    required={true}

                                />
                                <Input
                                    label="Company name"
                                    onchange={(e) => { handleInput('companyName', e.target.value) }}
                                    placeholder="Company name"
                                    type="text"
                                    value={formFields.companyName}
                                    required={true}

                                />
                            </div>
                        </div>
                        <div className="w-full">
                            <Input
                                label="Email"
                                onchange={(e) => handleInput('email', e.target.value)}
                                placeholder="example@email.com"
                                type="email"
                                value={formFields.email}
                                required={true}

                            />
                            <Input
                                label="Address"
                                onchange={(e) => handleInput('address', e.target.value)}
                                placeholder="Enter your address"
                                type="text"
                                value={formFields.address}
                                required={true}

                            />
                        </div>
                        <div className="flex flex-wrap w-full gap-2 md:gap-8 md:flex-nowrap">
                            <Input
                                label="Phone number one"
                                onchange={(e) => handleInput('phoneNumberOne', e.target.value)}
                                placeholder="Enter your number"
                                type="text"
                                value={formFields.phoneNumberOne}
                                required={true}

                            />
                            <Input
                                label="Phone number two"
                                onchange={(e) => handleInput('phoneNumberTwo', e.target.value)}
                                placeholder="Enter your second number"
                                type="text"
                                value={formFields.phoneNumberTwo}
                            />
                        </div>

                        <div className="flex w-full gap-2 md:w-1/4 md:ml-auto ">
                            <button className="px-3 bg-transparent border rounded-md cursor-pointer border-greenMain text-greenMain" type="button" onClick={() => { setView("profile") }}>Cancel</button>
                            <Button label="Save Changes" type="submit" variant="primary" ></Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}