import CardImg from '/images/Card.svg'


export default function LeftSide() {
    return (
        <section className="hidden xl:flex xl:flex-col justify-center xl:bg-form  xl:w-1/2  relative gap-5">
            <h1 className="text-white text-4xl xl:text-5xl  ml-auto max-w-[38rem] px-3 mb-10">Continue Your Journey with us.</h1>
            <div className=" ">
                <img src={CardImg} alt="" className="ml-auto" />
            </div>
        </section>
    )
}