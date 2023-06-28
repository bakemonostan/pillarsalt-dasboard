import { useBranchStore } from "../../store/branchStore";
import { capitalizeFirst } from "../../utils/formatWord";

type Props = {}
export default function TransCard({ }: Props) {
  const { transactionHistory } = useBranchStore();
  console.log(transactionHistory ? transactionHistory : 'no transaction history')
  return (

    <>
      {
        transactionHistory?.map((transaction) => {
          const { createdAt } = transaction
          const date = new Date(createdAt);
          const formattedDateTime = date.toLocaleDateString();
          return (
            <div key={transaction.id} className="flex flex-col w-full max-w-[23rem] xl:w-full xl:max-w-[30rem] bg-white mx-auto xl:mx-0 shadow-lg rounded-lg p-4 space-y-3 xl:hidden mb-2">
              {/* Card head */}
              <div className='flex justify-between border-b items-center border-b-[#F3F3F3]'>
                <p className='flex gap-1 pb-2'>
                  <span className="text-xs text-opacity-40 text-black font-semibold">S/N</span>
                  <span className="text-xs text-opacity-40 text-black font-semibold">{transaction.id}</span>
                </p>
                <p className='flex gap-1 pb-2'>
                  <span className="text-xs text-opacity-40 text-black ">Date:</span>
                  <span className="text-xs text-greenMain ">{formattedDateTime}</span>
                </p>
                <p className='flex gap-2 pb-2 text-xs'>
                  <span className="">Transaction Ref:</span>
                  <span> {transaction.transactionRef}</span>
                </p>
              </div>

              {/* Card body */}
              <div className='flex text-xs justify-between font-bold  items-center border-b border-b-[#F3F3F3] text-opacity-40 text-black '>
                <p className='flex flex-col gap-2 pb-2'>
                  <span className=" text-opacity-40 text-black ">Depositor:</span>
                  <span className=" text-opacity-40 text-black  ">James David</span>
                </p>
                <p className='flex flex-col gap-2 pb-2'>
                  <span className=" text-opacity-40 text-black ">Branch Name:</span>
                  <span className="text-opacity-40 text-black font-semibold">{capitalizeFirst(transaction.branchName)}</span>
                </p>

                <p className='flex flex-col gap-2 pb-2'>
                  <span className=" text-black text-opacity-40 font-semibold">Branch ID</span>
                  <span className="  ">{transaction.branchID ?? 'N/A'}</span>
                </p>


              </div>
              <div className='flex justify-between  items-center border-b border-b-[#F3F3F3] text-opacity-40 text-black text-xs'>
                <p className='flex flex-col gap-2 pb-2'>
                  <span className="text-opacity-40 text-black font-semibold"> Amount:</span>
                  <span className="font-semibold text-opacity-40 text-black">N1,200,00</span>
                </p>
                <p className='flex flex-col gap-2 pb-2'>
                  <span className="text-xs text-opacity-40 text-black font-semibold">Date Created:</span>
                  <span className="font-bold">{capitalizeFirst(formattedDateTime)}</span>
                </p>

                <p className='flex flex-col gap-2 pb-2'>
                  <span className="text-xs text-black text-opacity-40 font-semibold">Actions</span>
                  <span className="text-xs text-black font-semibold">|</span>
                </p>


              </div>


            </div>
          )
        })
      }
    </>
  )
}