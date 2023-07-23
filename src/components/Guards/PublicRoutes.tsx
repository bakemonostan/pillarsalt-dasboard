import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/auth/auth';
import { useEffect } from 'react';

interface PublicRoutesProps {
    isRouteAccessible?: boolean;
    redirectRoute?: string;
}


const PublicRoutes = ({
    redirectRoute = '/',
}: PublicRoutesProps): JSX.Element => {

    const location = useLocation();
    const capitalizeFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const title = capitalizeFirstLetter(location.pathname.split('/')[1]);

    useEffect(() => {
        if (title === '') {
            // document.title = 'Login | Pillarsalt Solutions'
        }
        else {
            document.title = ` ${title} | Pillarsalt Solutions`
        }
    }, [location]);

    const { token } = useAuthStore();
    return (
        <>
            {
                token ? <Navigate to={redirectRoute} replace /> : <Outlet />
            }
        </>
    );
}

export default PublicRoutes;