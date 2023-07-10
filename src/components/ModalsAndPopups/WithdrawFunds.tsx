import Button from "../Button/Button"
import close from '/images/close.svg'
import back from '/images/back.svg'
import Input from "../Form/Input"
import { useModal } from "../../store/wallet"
import { BankIcon, CardIcon, GreenAlertIcon } from "../Icons"
import ButtonProps from "../../types/Button"
import { motion } from 'framer-motion'

interface Props extends ButtonProps {
    title: React.ReactNode
    children?: React.ReactNode
}

export default function WithdrawFunds({ title, children }: Props) {
    const closeModal = useModal(state => state.closeModal)

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
                    tabIndex={-1}
                ></div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1, zIndex: 1000 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="bg-white  w-[28rem]   rounded-lg overflow-hidden shadow-xl transform transition-all max-w-sm ">
                    <div className="bg-white p-7 flex justify-between  items-center sm:px-6">
                        <div className="flex items-center gap-2">
                            <div className="bg-green-200 rounded-full  w-6 h-6 flex items-center justify-center">
                                <GreenAlertIcon height="18" width="18" />
                            </div>
                            <span>{title}</span>
                        </div>
                        <span className="cursor-pointer" onClick={() => { closeModal("withdraw") }}  > <img src={close} alt="" /></span>
                    </div>

                    <div className="px-4 py-5 sm:px-6 space-y-4">
                        <div className=''>
                            <p>Send funds to your saved bank account</p>
                        </div>
                        <Input
                            onchange={() => { }}
                            placeholder="Amount"
                            type="text"
                            label="Amount"
                            value=""
                        />
                        <div>
                            <select className="border w-full py-3 px-1 text-gray-600 rounded-lg"
                                name="cars" id="cars"
                                title="Select Bank"
                            >
                                <option value="volvo">Select Bank</option>
                                <option value="saab">GT Bank</option>
                                <option value="opel">First Bank</option>
                                <option value="audi">Access Bank</option>
                                <option value="audi">Zenith Bank</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2 items-center">
                            <p>OR</p>
                            <p className="text-greenMain font-bold cursor-pointer">Send To Other Account</p>
                        </div>


                    </div>

                    <div className="bg-gray-50 px-4 pb-7 sm:px-6 sm:flex sm:flex-row-reverse">
                        <Button label='Proceed' type="button" variant='primary' />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}