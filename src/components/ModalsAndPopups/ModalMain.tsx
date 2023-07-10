import React from "react"
import ButtonProps from "../../types/Button"
import Button from "../Button/Button"
import close from '/images/close.svg'
import back from '/images/back.svg'
import Input from "../Form/Input"
import { useModal } from "../../store/wallet"
import { BankIcon, CardIcon } from "../Icons"
import { motion } from 'framer-motion'

interface Props extends ButtonProps {
    title: React.ReactNode
    children?: React.ReactNode
}
export default function ModalMain({ title, children }: Props) {

    const closeModal = useModal(state => state.closeModal)
    return (
        <motion.div

            className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
                    tabIndex={-1}
                ></div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1, zIndex: 1000 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="bg-white w-[90%] rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full">
                    <div className="bg-white px-4 py-3 flex justify-between items-center sm:px-6">
                        <div className="flex items-center gap-2">
                            <span><img src={back} alt="" /></span>
                            <span>{title}</span>
                        </div>
                        <span className="cursor-pointer" onClick={
                            () => closeModal("fund")
                        }  > <img src={close} alt="" /></span>
                    </div>

                    <div className="px-4 py-5 sm:p-6 space-y-4">
                        <div className="flex flex-col justify-center mx-auto text-center w-full bg-greenMain bg-opacity-5 p-2 rounded-md">
                            <span className="text-blac text-xs">Wallet Balance</span>
                            <span className="font-bold text-lg text-greenMain">₦12,750,000</span>
                        </div>
                        <Input
                            onchange={() => { }}
                            placeholder="Amount"
                            type="text"
                            label="Amount"
                            value=""
                        />
                        {children}


                        <div className="space-y-4">
                            <div className="flex items-center justify-between gap-2 border rounded-md p-2 cursor-pointer hover:bg-[#E2E9FD]">
                                <div className="border  flex items-center justify-center rounded-full bg-[#E2E9FD] w-12 h-12 ">
                                    <BankIcon />
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold">Bank Transfer</p>
                                    <p className="text-sm">For transfers above ₦500,000. A processing fee of ₦161 applies.</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-2 border rounded-md p-2 cursor-pointer hover:bg-[#E2E9FD]">
                                <div className="border  flex items-center justify-center rounded-full bg-[#E2E9FD] w-12 h-12 ">
                                    <CardIcon />
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold">Card Payment</p>
                                    <p className="text-sm">For transfers below ₦500,000. A processing fee of ₦1,500 applies.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <Button label='Proceed' type="button" variant='primary' />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}


