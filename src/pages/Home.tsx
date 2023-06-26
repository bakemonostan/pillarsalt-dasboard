import { useEffect } from 'react'
import HomeComponent from '../components/Home'
import { useAuthStore, useMerchantStore } from '../store/auth/auth'

type Props = {}
export default function Home({ }: Props) {


    return (
        <>
            <HomeComponent />
        </>
    )
}