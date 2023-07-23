import { SvgProps } from "./IconTypes";


export default function ArrowDownIcon({
    width = "12",
    height = "8"
}: SvgProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.00022 7.09338L11.0086 2.08505L9.83105 0.905884L6.00022 4.73922L2.17022 0.905884L0.991882 2.08422L6.00022 7.09338Z" fill="#616161" />
        </svg>
    )
}