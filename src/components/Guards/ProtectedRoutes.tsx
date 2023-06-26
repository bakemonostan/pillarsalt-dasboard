import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../../store/auth/auth';

interface ProtectedRoutesProps {
    isRouteAccessible?: boolean;
    redirectRoute?: string;
}


const ProtectedRoutes = ({
    redirectRoute = '/',
}: ProtectedRoutesProps): JSX.Element => {


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