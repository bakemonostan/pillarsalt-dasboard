import { SvgProps } from "./IconTypes";

export default function ArrowRight({
    width = "15",
    height = "14"
}: SvgProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.50016 0.333336L6.32516 1.50834L10.9752 6.16667H0.833496V7.83334H10.9752L6.32516 12.4917L7.50016 13.6667L14.1668 7L7.50016 0.333336Z"
                fill="black" fill-opacity="0.38" />
        </svg>
    )
}