import { SvgProps } from "./IconTypes"

export default function CardIcon({
    color = "#056839",
    height = "24",
    width = "24",
}: SvgProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Icon">
                <path id="Vector" d="M19.5 4.5H4.5C3.45937 4.5 2.63437 5.33437 2.63437 6.375L2.625 17.625C2.625 18.6656 3.45937 19.5 4.5 19.5H19.5C20.5406 19.5 21.375 18.6656 21.375 17.625V6.375C21.375 5.33437 20.5406 4.5 19.5 4.5ZM19.5 17.625H4.5V12H19.5V17.625ZM19.5 8.25H4.5V6.375H19.5V8.25Z" fill={color} />
            </g>
        </svg>

    )
}