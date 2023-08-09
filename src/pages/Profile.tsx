import UserProfile from "../components/Profile";
import ChangePasswoord from "../components/Profile/ChangePasswoord";
import EditProfile from "../components/Profile/EditProfile";
import { useProfileStore } from "../store/profileStore";

export default function Profile() {
    const { currentView } = useProfileStore()
    return (
        <div className="h-screen pt-10 space-y-5">
            {
                currentView === "profile" ? <UserProfile /> : currentView === "update" ? <EditProfile /> : <ChangePasswoord />
            }
        </div>
    )
}