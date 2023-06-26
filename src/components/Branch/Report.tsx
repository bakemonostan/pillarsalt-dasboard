import Input from "../Form/Input"
import Table from '../Table'
import TransactionCard from "../Wallet/TransactionCard"
import Button from "../Button/Button"

const stuff = [1, 2, 3]
export default function Report() {
    return (
        <div className="flex flex-col space-y-6">
            <div className='flex gap-5 flex-col justify-between items center pb-8 md:flex-row'>
                <div>
                    <h1 className='text-headers font-bold text-2xl'>Branch Management</h1>
                </div>
                <div>
                    <Button
                        label='Branch Request'
                        type='button'
                        variant='primary'
                    />
                </div>
            </div>
            <section className="bg-white mx-auto  rounded-md space-y-4 xl:space-y-0 
            gap-5 items-center p-3 xl:flex  max-w-[23rem] w-full xl:max-w-full xl:bg-transparent xl:w-[58rem] xl:mx-0">
                <Input
                    type="text"
                    onchange={() => { }}
                    placeholder="Search branches"
                    value=""
                    label="Seacrh by branches"
                />
                <Input
                    type="date"
                    onchange={() => { }}
                    placeholder="Search branches"
                    value=""
                    label="Date created from"
                />
                <Input
                    type="date"
                    onchange={() => { }}
                    placeholder="Search branches"
                    value=""
                    label="Date created till"
                />
            </section>
            <section className="flex flex-col gap-5 py-4">
                <div className="flex justify-between md:w-[23rem] items-center md:mx-auto xl:w-full">
                    <h2 className="font-bold text-xl text-headers">
                        Branch List
                    </h2>
                    <p className="text-sm text-greenMain font-bold cursor-pointer">
                        See all
                    </p>
                </div>
                <Table isReport={true} />
                {stuff.map((item, index) => (
                    <TransactionCard key={index} />
                ))}
            </section>
        </div>
    )
}