import { Input } from "../ui/input";
import { FieldValues } from "react-hook-form";
import FormFieldWrapper, { FormFieldProps } from "./FormFieldWrapper";
import { NumericFormat } from "react-number-format";

export default function FormMoneyInput<
    TFieldValues extends FieldValues = FieldValues,
    TContext = undefined,
    TTransformedValues extends TFieldValues = TFieldValues
>(params: FormFieldProps<TFieldValues, TContext, TTransformedValues>) {
    return (
        <FormFieldWrapper
            {...params}
            render={({ field, placeholder }) => (
                <NumericFormat
                    value={field.value}
                    onValueChange={(values) => {
                        field.onChange(values.value); // apenas os dígitos numéricos
                    }}
                    customInput={Input}
                    decimalScale={2}
                    fixedDecimalScale
                    allowNegative={false}
                    decimalSeparator=","
                    thousandSeparator="."
                    placeholder={placeholder}
                    prefix="R$ "
                    allowLeadingZeros={true}
                />
            )}
        />
    );
}
