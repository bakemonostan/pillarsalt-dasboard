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
                <h1 className="text-xl font-extrabold text-headers">
                    Profile
                </h1>
                <div onClick={() => { setView("update") }}>
                    <Button label="Edit Profile" type="button" variant="primary" ></Button>
                </div>
            </div>


            <div className="w-full p-4 py-8 pb-24 mx-auto space-y-4 bg-white rounded-md shadow-lg lg:w-full lg:max-w-full xl:mx-0">
                {/* head */}
                {
                    isLoading ? <Loader /> :
                        <>
                            <div className="flex items-center gap-3">
                                <img src={profileIcon} alt="" />
                                <p>{userProfile.companyName}</p>
                            </div>

                            <div className="space-y-3">
                                <h2 className="text-sm font-extrabold text-headers lg:text-xl">
                                    Personal Information
                                </h2>
                                <hr />
                            </div>

                            <div className="flex flex-wrap gap-10">

                                <div className="space-y-5">
                                    <div className="space-x-6 text-sm">
                                        <span className="text-grayTwo">Email:</span>
                                        <span className="font-bold text-headers">{userProfile.email}</span>
                                    </div>
                                    <div className="space-x-6 text-sm">
                                        <span className="text-grayTwo">Phone No. 1:</span>
                                        <span className="font-bold text-headers">{userProfile.phone1}</span>
                                    </div>
                                    <div className="space-x-6 text-sm">
                                        <span className="text-grayTwo">Country:</span>
                                        <span className="font-bold text-headers">Nigeria</span>
                                    </div>

                                </div>

                                <div className="space-y-5">
                                    <div className="space-x-6 text-sm">
                                        <span className="text-grayTwo">Contact Person:</span>
                                        <span className="font-bold text-headers">{userProfile.contactPerson}</span>
                                    </div>
                                    <div className="space-x-6 text-sm">
                                        <span className="text-grayTwo">Phone No. 2:</span>
                                        <span className="font-bold text-headers">{userProfile.phone2}</span>
                                    </div>

                                </div>
                            </div>
                        </>
                }
            </div>
        </>
    )
}