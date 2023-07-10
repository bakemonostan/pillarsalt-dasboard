import { Link } from 'react-router-dom'
import Input from '../Form/Input'
import arrow from '/images/arrow-down.svg'
import { useTicketStore } from '../../store/ticketStore'
import { merchantApi } from '../../config/api'
import { useRef, useState } from 'react'
import Button from '../Button/Button'

type Props = {}
export default function CreateTicket({ }: Props) {
    const [desc, setDesc] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const res = await merchantApi.post('Ticket/create-ticket', {
                ticketTittle: 'Testing',
                description: desc,
                phoneNumber: '08012345678',
                email: 'soscreation@gmail.com',
                ticketPriority: 1,
                ticketType: 1,
            })
        } catch (error) {
            console.log(error)
        }
        setDesc('')

    }




    return (
        <div className='h-screen space-y-16 pt-10'>
            <Link to='/support' className='border p-2 rounded-md px-4'>
                Back to Ticket
            </Link>
            <form className="bg-white rounded-md border px-12 py-10 space-y-7"
                onSubmit={handleSubmit}
            >
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
                            value={email}
                            onchange={(e) => setEmail(e.target.value)}
                            required={true}
                        />
                    </div>


                    <div className="mt-auto">
                        <div>
                            <label htmlFor="ticketType" className="block text-sm font-medium leading-6 text-gray-900">
                                Request Ticket Type
                            </label>
                            <select
                                id="ticketType"
                                name="ticketType"
                                className="mt-2 block  w-[17rem] rounded-md border-0 py-2.5 px-5 text-gray-400 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-400 sm:text-sm sm:leading-6"
                                defaultValue="Failed Transfer"
                                required
                            >
                                <option>Failed Transfer</option>
                                <option>Unathourized Transfer</option>
                                <option>Others</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-auto">
                        <div>
                            <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">
                                Status
                            </label>
                            <select
                                id="status"
                                name="status"
                                className="mt-2 block w-[17rem] rounded-md border-0 py-2.5 px-5 text-gray-400 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-400 sm:text-sm sm:leading-6"
                                defaultValue="Ongoing"
                            >
                                <option >
                                    Ongoing
                                </option>
                                <option>Completed</option>
                                <option>New</option>
                            </select>
                        </div>
                    </div>


                </div>

                <div className='flex flex-col'>
                    <label htmlFor="request
                    ticket type">
                        Request Ticket Type
                    </label>
                    <textarea placeholder="Enter your reply here" className="border resize-none h-[15rem] p-3"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    >
                    </textarea>
                </div>
                <div className='w-40 ml-auto'>
                    <Button
                        type='submit'
                        variant='primary'
                        label='Submit Request'
                    />
                </div>
            </form>
        </div>
    )
}