import Button from "../components/Button/Button";
import UserProfile from "../components/Profile";
import ChangePasswoord from "../components/Profile/ChangePasswoord";
import EditProfile from "../components/Profile/EditProfile";
import { useProfileStore } from "../store/profileStore";
import profileIcon from '/images/icon-holder.svg'

export default function Profile() {
    const { currentView } = useProfileStore()
    return (
        <div className="h-screen space-y-5 pt-10">
            {
                currentView === "profile" ? <UserProfile /> : currentView === "update" ? <EditProfile /> : <ChangePasswoord />
            }
        </div>
    )
}