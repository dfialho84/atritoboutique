import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import {
    type UseFormReturn,
    ControllerRenderProps,
    FieldValues,
    Path,
} from "react-hook-form";

type FormFieldRenderFn<T extends FieldValues> = (params: {
    field: ControllerRenderProps<T, Path<T>>;
    placeholder?: string;
}) => React.ReactNode;

export type FormFieldProps<T extends FieldValues> = {
    form: UseFormReturn<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    description?: string;
    className?: string;
};

type FormFieldWrapperProps<T extends FieldValues> = {
    render: FormFieldRenderFn<T>;
} & FormFieldProps<T>;

export default function FormFieldWrapper<T extends FieldValues>({
    form,
    name,
    label,
    placeholder,
    description,
    className,
    render,
}: FormFieldWrapperProps<T>) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => {
                const renderedChildren = render({ field, placeholder });
                return (
                    <FormItem className={className}>
                        <FormLabel>{label}</FormLabel>
                        <FormControl>{renderedChildren}</FormControl>
                        {description && (
                            <FormDescription>{description}</FormDescription>
                        )}
                        <FormMessage />
                    </FormItem>
                );
            }}
        />
    );
}
