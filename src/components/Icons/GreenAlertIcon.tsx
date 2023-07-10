import { SvgProps } from "./IconTypes"

export default function GreenAlertIcon({
    color = "#056839",
    height = "16",
    width = "16",
}: SvgProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g id="Icon">
                <path id="Vector" d="M8 1.75C4.55 1.75 1.75 4.55 1.75 8C1.75 11.45 4.55 14.25 8 14.25C11.45 14.25 14.25 11.45 14.25 8C14.25 4.55 11.45 1.75 8 1.75ZM8.625 11.125H7.375V7.375H8.625V11.125ZM8.625 6.125H7.375V4.875H8.625V6.125Z" fill="#056839"
                />
            </g>
        </svg>

    )
}