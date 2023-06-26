import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

const Container = ({ children }: Props) => {
    return (
        <div className="flex">
            <section className="py-8 h-screen w-[90%] max-w-sm min-w-[12rem] mx-auto flex flex-col justify-between gap-8  xl:w-1/2 xl:justify-center">

                {children}

            </section>
        </div>
    )
}
export default Container