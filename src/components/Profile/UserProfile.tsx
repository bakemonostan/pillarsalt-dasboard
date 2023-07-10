import { useEffect } from "react";
import { useProfileStore } from "../../store/profileStore";
import Button from "../Button/Button";
import profileIcon from '/images/icon-holder.svg'
import Loader from "../Loaders/Loader";


export default function UserProfile() {
    const { setView, getUserProfile, userProfile, isLoading } = useProfileStore()
    useEffect(() => {
        getUserProfile()
    }, [])

    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-headers font-extrabold text-xl">
                    Profile
                </h1>
                <div onClick={() => { setView("update") }}>
                    <Button label="Edit Profile" type="button" variant="primary" ></Button>
                </div>
            </div>


            <div className="w-full  lg:w-full lg:max-w-full bg-white mx-auto xl:mx-0 shadow-lg rounded-md p-4 space-y-4 py-8 pb-24">
                {/* head */}
                {
                    isLoading ? <Loader /> :
                        <>
                            <div className="flex items-center gap-3">
                                <img src={profileIcon} alt="" />
                                <p>{userProfile.companyName}</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="text-headers font-extrabold text-sm lg:text-xl">
                                    Personal Information
                                </h2>
                                <hr />
                            </div>

                            <div className="flex gap-10 flex-wrap">

                                <div className="space-y-5">
                                    <div className="text-sm space-x-6">
                                        <span className="text-grayTwo">Email:</span>
                                        <span className="text-headers font-bold">{userProfile.email}</span>
                                    </div>
                                    <div className="text-sm space-x-6">
                                        <span className="text-grayTwo">Phone No. 1:</span>
                                        <span className="text-headers font-bold">{userProfile.phone1}</span>
                                    </div>
                                    <div className="text-sm space-x-6">
                                        <span className="text-grayTwo">Country:</span>
                                        <span className="text-headers font-bold">Nigeria</span>
                                    </div>

                                </div>

                                <div className="space-y-5">
                                    <div className="text-sm space-x-6">
                                        <span className="text-grayTwo">Contact Person:</span>
                                        <span className="text-headers font-bold">{userProfile.contactPerson}</span>
                                    </div>
                                    <div className="text-sm space-x-6">
                                        <span className="text-grayTwo">Phone No. 2:</span>
                                        <span className="text-headers font-bold">{userProfile.phone2}</span>
                                    </div>

                                </div>
                            </div>
                        </>
                }
            </div>
        </>
    )
}