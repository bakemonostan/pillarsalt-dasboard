import { Link } from "react-router-dom"
import Button from "../Button/Button"
import NotFound from "../Icons/NotFound"

type Props = {}
export default function ErrorPage({ }: Props) {
    return (
        <main className="h-screen w-full flex flex-col mt-20 px-2  items-center gap-6 md:mt-10">
            <h1 className="text-greenMain font-bold text-center md:text-2xl">Oops, looks like you entered a wrong url!!</h1>
            <p className="text-greenMain font-semibold text-center md:text-xl" >Page not found</p>
            <div className="md:w-2/4">
                <NotFound />
            </div>
            <Link to='/'>
                <Button label='Go Back' type='button' variant='primary' />
            </Link>
        </main>
    )
}