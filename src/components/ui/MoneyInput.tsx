// "use client";
// import { NumericFormat } from "react-number-format";
// import { Input } from "./input";

// interface MonetaryInputProps
//     extends React.InputHTMLAttributes<HTMLInputElement> {
//     value: number; // Value in cents
//     onValueChange: (value: number) => void;
//     currencySymbol?: string;
//     decimalSeparator?: string;
//     thousandSeparator?: string;
// }

// // eslint-disable-next-line
// export default function MoneyInput({
//     value,
//     onValueChange,
//     currencySymbol,
//     decimalSeparator,
//     thousandSeparator,
//     type, // eslint-disable-line'
//     defaultValue, // eslint-disable-line
//     ...props
// }: MonetaryInputProps) {
//     return (
//         <NumericFormat
//             customInput={Input}
//             value={value / 100}
//             onValueChange={(values) => {
//                 // `values.floatValue` gives the number as a float (e.g., 123.45)
//                 // Convert back to cents for internal storage
//                 onValueChange(
//                     values.floatValue ? Math.round(values.floatValue * 100) : 0
//                 );
//             }}
//             prefix={`${currencySymbol} `}
//             decimalSeparator={decimalSeparator}
//             thousandSeparator={thousandSeparator} // Only show thousand separator if groupSeparator is provided
//             decimalScale={2} // Always show 2 decimal places for cents
//             fixedDecimalScale={true} // Keep 2 decimal places fixed
//             allowNegative={false}
//             {...props}
//         />
//     );
// }
