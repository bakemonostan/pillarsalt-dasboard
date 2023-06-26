import React from "react"
import ButtonProps from "../../types/Button"
import Button from "../Button/Button"
import close from '/images/close.svg'
import back from '/images/back.svg'
import Input from "../Form/Input"
import { useModal } from "../../store/wallet"

interface Props extends ButtonProps {
    title: React.ReactNode
    children?: React.ReactNode
}
export default function ModalMain({ title, children, label, variant }: Props) {

    const closeModal = useModal(state => state.closeModal)
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
                    tabIndex={-1}
                ></div>

                <div className="bg-white w-[90%] rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-md sm:w-full">
                    <div className="bg-white px-4 py-3 flex justify-between items-center sm:px-6">
                        <div className="flex items-center gap-2">
                            <span><img src={back} alt="" /></span>
                            <span>{title}</span>
                        </div>
                        <span className="cursor-pointer" onClick={closeModal}  > <img src={close} alt="" /></span>
                    </div>

                    <div className="px-4 py-5 sm:p-6">
                        <div className="flex flex-col justify-center mx-auto text-center w-full bg-greenMain bg-opacity-5 p-2 rounded-md">
                            <span className="text-blac text-xs">Wallet Balance</span>
                            <span className="font-bold text-sm text-greenMain">₦12,750,000</span>
                        </div>
                        <Input
                            onchange={() => { }}
                            placeholder="Amount"
                            type="text"
                            label="Amount"
                            value=""
                        />
                        {/* {children} */}
                        <h3>
                            Choose Method
                        </h3>

                        <div>

                        </div>
                    </div>

                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <Button label='Proceed' type="button" variant='primary' />
                    </div>
                </div>
            </div>
        </div>
    )
}


