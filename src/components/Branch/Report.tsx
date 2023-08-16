import React, { useEffect, useState } from 'react';
import Input from '../Form/Input';
import Button from '../Button/Button';
import Card from '../Card/CardMain';
import { useBranchStore } from '../../store/branchStore';
import BranchReportTable from '../Table/BranchReportTable';
import Pagination from '../Paginate';
import BranchModal from '../ModalsAndPopups/BranchModal';
import { toast } from 'react-toastify';


export default function Report() {
    const { allBranches, setModal, showModal, error, errorMsg } = useBranchStore();
    const [searchText, setSearchText] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(5);


    const filteredBranches = allBranches.filter((branch) => {
        // Filter by search text
        if (searchText !== '' && !branch.branchName.toLowerCase().includes(searchText.toLowerCase())) {
            return false;
        }

        // Filter by date range
        if (startDate !== '' && new Date(branch.createdAt) < new Date(startDate)) {
            return false;
        }
        if (endDate !== '' && new Date(branch.createdAt) > new Date(endDate)) {
            return false;
        }

        return true;
    });

    useEffect(() => {
        if (error) {
            toast.error(errorMsg)
        }
    }, [])

    const clearFilters = () => {
        setSearchText('');
        setStartDate('');
        setEndDate('');
    };

    const indexOfLastCard = currentPage * rowsPerPage;
    const indexOfFirstCard = indexOfLastCard - rowsPerPage;
    const currentBranch = filteredBranches.slice(indexOfFirstCard, indexOfLastCard);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="flex flex-col space-y-6">
            {showModal && <BranchModal title="Branch Request" />}
            <div className='flex flex-col justify-between gap-5 pb-8 items center md:flex-row'>
                <div>
                    <h1 className='text-2xl font-bold text-headers'>Branch Management</h1>
                </div>
                <div>
                    <Button
                        label='Branch Request'
                        type='button'
                        variant='primary'
                        onClick={() => setModal(true)}
                    />
                </div>
            </div>
            <section className="bg-white mx-auto  rounded-md space-y-4 xl:space-y-0 
            gap-5 items-center p-3 xl:flex  max-w-[23rem] w-full xl:max-w-full xl:bg-transparent xl:w-[58rem] xl:mx-0">
                <Input
                    type="text"
                    onchange={(event) => setSearchText(event.target.value)}
                    placeholder="Search branches"
                    value={searchText}
                    label="Search by branches"
                />
                <Input
                    type="date"
                    onchange={(event) => setStartDate(event.target.value)}
                    placeholder="Search branches"
                    value={startDate}
                    label="Date created from"
                />
                <Input
                    type="date"
                    onchange={(event) => setEndDate(event.target.value)}
                    placeholder="Search branches"
                    value={endDate}
                    label="Date created till"
                />
                <div className='w-full pt-7'
                    onClick={clearFilters}
                >
                    <Button
                        label="Clear Filters"
                        type="button"
                        variant="primary"
                    />
                </div>
            </section>
            <section className="flex flex-col gap-5 py-4">
                <div className="flex justify-between md:w-[23rem] items-center md:mx-auto xl:w-full">
                    <h2 className="text-xl font-bold text-headers">
                        Branch List
                    </h2>
                    <p className="text-sm font-bold cursor-pointer text-greenMain">
                        See all
                    </p>
                </div>
                <div className="hidden overflow-x-auto xl:block">
                    <table className="w-full border-collapse table-auto">
                        <thead>
                            <tr className="text-center bg-[#ECF2BA] w-full py-3">
                                <th className="px-4 py-2">S/N</th>
                                <th className="px-4 py-2">Branch Name</th>
                                <th className="px-4 py-2"> BranchID</th>
                                <th className="px-4 py-2">Branch Code</th>
                                <th className="px-4 py-2">Branch Location</th>
                                <th className="px-4 py-2">Branch Address</th>
                                <th className="px-4 py-2">Date Created</th>
                                <th className="px-4 py-2">Requested by</th>
                                <th className="px-4 py-2 text-center">Actions</th>
                            </tr>
                        </thead>
                        {currentBranch.length > 0 ?
                            currentBranch.map((branch) => {
                                return (
                                    <BranchReportTable
                                        key={branch.id}
                                        {...branch}
                                    />
                                )
                            }
                            )
                            :
                            <tbody>
                                <tr className="text-center bg-[#ECF2BA] w-full py-3">
                                    <td className="px-4 py-2" colSpan={9}>No Branches Found</td>
                                </tr>
                            </tbody>


                        }
                    </table>
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(filteredBranches.length / rowsPerPage)}
                    onPageChange={handlePageChange}
                />
                <Card page="branch" />
            </section>
        </div>
    )
}