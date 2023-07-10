import { SvgProps } from "./IconTypes"
export default function BankIcon({
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
                <g id="Group">
                    <path id="Shape" fillRule="evenodd" clipRule="evenodd" d="M22.793 4.79861L12.4922 0.840455C12.3647 0.789293 12.1406 0.749756 12 0.749756C11.8599 0.749756 11.6388 0.789293 11.5069 0.840107L1.20615 4.79861C0.954609 4.89177 0.75 5.14885 0.75 5.45647V7.07805C0.75 7.46477 1.06447 7.78118 1.45312 7.78118H2.15625V8.4843C2.15625 8.87102 2.4709 9.18743 2.85938 9.18743H21.1406C21.5273 9.18743 21.8438 8.87102 21.8438 8.4843V7.78118H22.5469C22.9336 7.78118 23.25 7.46477 23.25 7.07805V5.45647C23.25 5.16204 23.0698 4.90012 22.793 4.79861ZM22.5469 20.4374H21.8438V19.0312C21.8438 18.2547 21.214 17.6249 20.4375 17.6249V10.5937H17.625V17.6249H13.4062V10.5937H10.5938V17.6249H6.375V10.5937H3.5625V17.6249C2.78599 17.6249 2.15625 18.2547 2.15625 19.0312V20.4374H1.45312C1.06636 20.4374 0.75 20.7538 0.75 21.1406V22.5468C0.75 22.9335 1.06636 23.2499 1.45312 23.2499H22.5469C22.9336 23.2499 23.25 22.9335 23.25 22.5468V21.1406C23.25 20.7538 22.9336 20.4374 22.5469 20.4374ZM10.5938 5.67181C10.5938 6.44833 11.2235 7.07806 12 7.07806C12.7778 7.07806 13.4062 6.44965 13.4062 5.67181C13.4062 4.8953 12.7765 4.26556 12 4.26556C11.2235 4.26556 10.5938 4.8953 10.5938 5.67181Z" fill={color} />
                </g>
            </g>
        </svg>

    )
}