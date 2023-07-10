import { useAuthStore } from '../../store/auth/auth'
import ButtonProps from '../../types/Button'
import { motion } from 'framer-motion'
export default function Button({ variant, isDisabled, label, onClick, type }: ButtonProps) {
    const { loading } = useAuthStore()
    return (
        <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.99 }}
            className={`w-full rounded-md p-2 px-4 cursor-pointer
        ${isDisabled ? 'bg-disabled text-black text-opacity-30' : variant == 'primary' ? 'bg-greenMain text-white' : 'bg-gray-500'}`}
            type={type}
            disabled={isDisabled}
        >
            {
                !loading ? label :
                    <div className="bg-greenMain flex justify-center rounded-md">
                        <img src="/images/spinner.svg" alt="" className='p-0.5 animate-spin' />
                    </div>
            }
        </motion.button>
    )
}