import { useAuthStore } from '../../store/auth/auth.ts'
import ButtonProps from '../../types/Button.ts'

export default function Button({ variant, isDisabled, label, onClick, type }: ButtonProps) {
    const { loading } = useAuthStore()
    return (
        <button className={`w-full rounded-md p-2 px-4 cursor-pointer
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
        </button>
    )
}