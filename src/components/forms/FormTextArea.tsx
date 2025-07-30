import { FieldValues } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import FormFieldWrapper, { FormFieldProps } from "./FormFieldWrapper";

export default function FormTextArea<T extends FieldValues>(
    props: FormFieldProps<T>
) {
    return (
        <FormFieldWrapper
            {...props}
            render={({ field, placeholder }) => (
                <Textarea {...field} placeholder={placeholder} />
            )}
        />
    );
}
