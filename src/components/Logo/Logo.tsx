import logo from '/images/logo.svg'

export default function Logo() {
    return (
        <div>
            <img src={logo} alt="Logo" className='w-15 h-15 relative right-5' />
        </div>
    )
}