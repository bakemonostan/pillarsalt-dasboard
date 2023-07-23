import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/auth/auth';
import { useEffect } from 'react';

interface ProtectedRoutesProps {
    isRouteAccessible?: boolean;
    redirectRoute?: string;
}


const ProtectedRoutes = ({
    redirectRoute = '/',
}: ProtectedRoutesProps): JSX.Element => {

    const location = useLocation();
    const capitalizeFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const title = capitalizeFirstLetter(location.pathname.split('/')[1]);

    useEffect(() => {
        if (!token) return;
        if (title === '') {
            document.title = 'Dashboard | Pillarsalt Solutions'
        }
        else {
            document.title = ` ${title} | Pillarsalt Solutions`
        }
    }, [location]);
    const { token } = useAuthStore();
    return (
        <>
            {
                token ? <Outlet /> : <Navigate to={redirectRoute} replace />
            }
        </>
    );
}

export default ProtectedRoutes;