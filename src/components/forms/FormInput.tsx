import { Input } from "../ui/input";
import { FieldValues } from "react-hook-form";
import FormFieldWrapper, { FormFieldProps } from "./FormFieldWrapper";

export default function FormInput<
    TFieldValues extends FieldValues = FieldValues,
    TContext = undefined,
    TTransformedValues extends TFieldValues = TFieldValues
>(params: FormFieldProps<TFieldValues, TContext, TTransformedValues>) {
    return (
        <FormFieldWrapper
            {...params}
            render={({ field, placeholder }) => (
                <Input {...field} placeholder={placeholder} />
            )}
        />
    );
}
