import React, { useEffect, useState } from "react"
import ButtonProps from "../../types/Button"
import Button from "../Button/Button"
import close from '/images/close.svg'
import { motion } from 'framer-motion'
import { useBranchStore } from "../../store/branchStore"
import { AllBranches } from "../../types/branch"
import { toast } from 'react-toastify';

interface Props extends ButtonProps {
    title: React.ReactNode
    children?: React.ReactNode
}
export default function BranchModal({ title, children }: Props) {
    const [selectedBranch, setSelectedBranch] = useState('' as string);
    const [selectedBranchData, setSelectedBranchData] = useState(null as AllBranches | null);
    const { allBranches, isFormLoading, getBranchRequest, error, setModal, success, errorMsg } = useBranchStore();

    useEffect(() => {
        if (error) {
            toast.error(errorMsg);
        }
        if (success) {
            toast.success('Branch request sent');
        }
    }, [error, errorMsg, success]);

    const handleBranchSelection = (event: any) => {
        const selectedBranchName = event.target.value;
        setSelectedBranch(selectedBranchName);
        // Find the selected branch data from allBranches array
        const branchData = allBranches.find(branch => branch.branchName === selectedBranchName);
        setSelectedBranchData(branchData || null);
    };

    const handlebranchRequest = async (e: any) => {
        e.preventDefault();
        if (selectedBranchData == null) {
            toast.error('Please select a branch');
            return;
        }

        getBranchRequest(
            selectedBranchData?.id,
            selectedBranchData?.branchName,
            selectedBranchData?.branchName,
        );

        if (!isFormLoading) {
            setSelectedBranch('')
            setSelectedBranchData(null)
        }
    }
    return (
        <motion.div

            className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
                <div
                    className="fixed inset-0 transition-opacity bg-black bg-opacity-75"
                    tabIndex={-1}
                ></div>

                <motion.form
                    onSubmit={handlebranchRequest}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1, zIndex: 1000 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="bg-white w-[90%] py-4 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full">
                    <div className="items-center justify-between px-4 pt-3 pb-2 bg-white sm:px-6">
                        <div className="flex items-center justify-between w-full gap-2 ">
                            <span className='text-xl font-bold'>{title}</span>
                            <span className="cursor-pointer" onClick={() => {
                                setModal(false)
                                useBranchStore.setState({ error: false });
                            }}  > <img src={close} alt="" /></span>
                        </div>
                        <p>
                            Kindly select branch below
                        </p>

                    </div>

                    <div className="px-4 py-5 space-y-4 sm:py-2 sm:p-6">
                        <select name="branches" id="" className="w-full p-2 border rounded-md"
                            onChange={handleBranchSelection} // Use onChange event to handle branch selection
                            value={selectedBranch}
                        >
                            <option value="">Select Branch</option>
                            {
                                allBranches?.map((branch) => (
                                    // set option to selected branch
                                    <option key={branch.id} value={branch.branchName} onClick={() => setSelectedBranch(branch.branchName)}>{branch.branchName}</option>
                                ))
                            }
                        </select>

                        <div className="space-y-4">
                            <textarea name="" id="" className="w-full p-2 border rounded-md" cols={130} rows={6} placeholder="Provide comment here" />
                        </div>
                        {error && <span className='text-sm font-semibold text-red-500'>{errorMsg} </span>}
                        {success && <span className='text-sm font-semibold text-greenMain'>Branch request sent</span>}
                    </div>

                    <div className="px-4 py-3 space-y-4 sm:space-y-0 sm:gap-2 sm:ml-auto bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse sm:w-3/4">
                        <Button label='Request' type="submit" variant='primary'
                            isDisabled={isFormLoading}
                        />
                        <Button label='Cancel' type="button" variant='outline' onClick={() => {
                            setModal(false)
                            useBranchStore.setState({ error: false });
                        }} />
                    </div>
                </motion.form>
            </div>
        </motion.div>
    )
}


