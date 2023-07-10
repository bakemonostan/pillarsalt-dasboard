import React from 'react';
import { motion } from 'framer-motion';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) {
            return; // Prevent invalid page change
        }
        onPageChange(page);
    };

    return (
        <div className='hidden xl:flex gap-3 justify-end mt-10'>
            <div>
                <button
                    type='button'
                    disabled={isFirstPage}
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    <motion.p
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className='cursor-pointer'
                    >
                        Previous
                    </motion.p>
                </button>
            </div>
            <div className='space-x-2'>
                <span className='border py-2 px-4 bg-greenMain text-white rounded-md cursor-pointer'>
                    {currentPage}
                </span>
                <span className='border py-2 px-4 rounded-md cursor-pointer'>
                    {totalPages}
                </span>
            </div>
            <div>
                <button
                    type='button'
                    disabled={isLastPage}
                    onClick={() => handlePageChange(currentPage + 1)}
                >

                    <motion.p
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className='cursor-pointer'
                    >
                        Next
                    </motion.p>
                </button>
            </div>
        </div>
    );
};

export default Pagination;
