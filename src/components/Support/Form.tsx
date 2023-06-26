import Button from "../Button/Button"
import Input from "../Form/Input"
import arrow from '/images/arrow-down.svg'

type Props = {}
export default function Form({ }: Props) {
    return (
        <form className="space-y-4 border bg-[#FAFAFA] rounded-md  p-7 px-9">
            <div>
                <h2>Respond to Tickect</h2>
            </div>


            <div className="flex flex-wrap gap-3 justify-between items-baseline">
                <div>
                    <Input isdisabled={true} type="text"
                        placeholder="topegeorge@gmail.com"
                        name="" classes='w-full'
                        label="Customer Mail"
                        value=""
                        onchange={() => { }}
                    />
                </div>


                <div className="mt-auto">
                    <h3>Request Ticket Type</h3>
                    <div className="border p-2.5 px-3 rounded-md w-[15rem] ">
                        <p className="flex items-center justify-between">
                            <span>
                                Failed transfer
                            </span>
                            <span>
                                <img src={arrow} alt="" />
                            </span>
                        </p>
                    </div>
                </div>

                <div className="mt-auto">
                    <h3>
                        Status
                    </h3>
                    <div className="border p-2.5 px-3 rounded-md w-[15rem] mt-auto">
                        <p className="flex items-center justify-between">
                            <span>
                                On-going
                            </span>
                            <span>
                                <img src={arrow} alt="" />
                            </span>
                        </p>
                    </div>
                </div>


            </div>


            <div className="">
                <textarea
                    placeholder="Enter your reply here"
                    name=""
                    value=""
                    className="w-full resize-none border p-3 rounded-md h-40"
                />
            </div>

            <div className=" ml-auto xl:w-1/5">
                <Button
                    type="submit"
                    label="Submit Response"
                    variant="primary"
                />
            </div>
        </form>
    )
}