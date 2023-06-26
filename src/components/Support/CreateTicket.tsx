import { Link } from 'react-router-dom'
import Input from '../Form/Input'
import arrow from '/images/arrow-down.svg'

type Props = {}
export default function CreateTicket({ }: Props) {
    return (
        <div className='h-screen space-y-16 pt-10'>
            <Link to='/support' className='border p-2 rounded-md px-4'>
                Back to Ticket
            </Link>
            <form className="bg-white rounded-md border px-12 py-10 space-y-7">
                <div>
                    <h3>Create a new ticket</h3>
                </div>

                <div className="flex flex-wrap gap-3 justify-between">
                    <div>
                        <Input
                            isdisabled={false}
                            type="text"
                            placeholder="Enter email"
                            name=""
                            classes='w-[17rem]'
                            label="Customer Mail"
                            value=""
                            onchange={() => { }}
                        />
                    </div>


                    <div className="mt-auto">
                        <h3>Request Ticket Type</h3>
                        <div className="border p-2.5 px-3 rounded-md w-[17rem] ">
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
                        <div className="border p-2.5 px-3 rounded-md w-[17rem] mt-auto">
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

                <div className='flex flex-col'>
                    <label htmlFor="request
                    ticket type">
                        Request Ticket Type
                    </label>
                    <textarea placeholder="Enter your reply here" className="border resize-none h-[15rem] p-3">

                    </textarea>
                </div>
            </form>
        </div>
    )
}