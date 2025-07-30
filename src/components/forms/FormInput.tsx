import { Input } from "../ui/input";
import { FieldValues } from "react-hook-form";
import FormFieldWrapper, { FormFieldProps } from "./FormFieldWrapper";

export default function FormInput<T extends FieldValues>(
    params: FormFieldProps<T>
) {
    return (
        <FormFieldWrapper
            {...params}
            render={({ field, placeholder }) => (
                <Input {...field} placeholder={placeholder} />
            )}
        />
    );
}
