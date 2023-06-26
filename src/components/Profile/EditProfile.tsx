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

    const handleInput = (field: string, value: string) => {
        setFormField(field, value)
    }


    const handleSubmit = async (e: any) => {
        e.preventDefault()
        console.log(formFields)
        const response = await merchantApi.put('Configuration/update-marchant-detail', {
            profileId,
            acquirerId,
            merchantRef,
            ...formFields
        })
        console.log(response)
    }

    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-headers font-extrabold text-xl">
                    Profile
                </h1>
                <div onClick={() => { setView("change") }}>
                    <Button label="Change Password" type="button" variant="primary"  ></Button>
                </div>
            </div>

            <div className="w-full  lg:w-full lg:max-w-full bg-white mx-auto xl:mx-0 shadow-lg rounded-md p-4 space-y-4 py-8 pb-24">
                {/* head */}
                <div className="flex items-center gap-3 pb-5">
                    <img src={profileIcon} alt="" />
                    <p>James Ajayi</p>
                </div>

                <div className="space-y-5">
                    <h2 className="text-headers font-extrabold text-sm lg:text-xl">
                        Personal Information
                    </h2>
                    <hr />
                </div>

                <form className="" onSubmit={handleSubmit}>
                    <div className="w-full   md:w-3/5 space-y-5">
                        <div className=" flex w-full flex-col">
                            <div className="flex flex-wrap gap-2 w-full md:gap-8  md:flex-nowrap">
                                <Input label="First name"
                                    onchange={(e) => { handleInput('firstName', e.target.value) }}
                                    placeholder="First name"
                                    type="text"
                                    // value={formFields.firstName}
                                    value='Suraju'
                                    required={true}
                                />
                                <Input
                                    label="Last name"
                                    onchange={(e) => { handleInput('lastName', e.target.value) }}
                                    placeholder="Last name"
                                    type="text"
                                    // value={formFields.lastName}
                                    value='Suraju'
                                    required={true}

                                />
                            </div>
                            <div className="flex flex-wrap gap-2 w-full md:gap-8  md:flex-nowrap">
                                <Input
                                    label="Contact person"
                                    onchange={(e) => { handleInput('contactPerson', e.target.value) }}
                                    placeholder="Contact person"
                                    type="text"
                                    // value={formFields.contactPerson}
                                    value='Suraju'
                                    required={true}

                                />
                                <Input
                                    label="Company name"
                                    onchange={(e) => { handleInput('companyName', e.target.value) }}
                                    placeholder="Company name"
                                    type="text"
                                    // value={formFields.companyName}
                                    value='Pillarsalt Ltd'
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
                                // value={formFields.email}
                                value='soscreation2020@gmail.com'
                                required={true}

                            />
                            <Input
                                label="Address"
                                onchange={(e) => handleInput('address', e.target.value)}
                                placeholder="Enter your address"
                                type="text"
                                // value={formFields.address}
                                value='OBAWOLE CLOSE, IJU FAGBA, LAGOS'
                                required={true}

                            />
                        </div>
                        <div className="flex flex-wrap gap-2 w-full md:gap-8  md:flex-nowrap">
                            <Input
                                label="Phone number one"
                                onchange={(e) => handleInput('phoneNumberOne', e.target.value)}
                                placeholder="Enter your number"
                                type="text"
                                // value={formFields.phoneNumberOne} 
                                value='08063577223'
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

                        <div className="flex gap-2 w-full md:w-1/4 md:ml-auto ">
                            <button className="border border-greenMain bg-transparent text-greenMain rounded-md px-3 cursor-pointer" type="button" onClick={() => { setView("profile") }}>Cancel</button>
                            <Button label="Save Changes" type="submit" variant="primary" ></Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}