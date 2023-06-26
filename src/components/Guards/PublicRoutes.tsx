import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../../store/auth/auth';

interface PublicRoutesProps {
    isRouteAccessible?: boolean;
    redirectRoute?: string;
}


const PublicRoutes = ({
    redirectRoute = '/',
}: PublicRoutesProps): JSX.Element => {


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