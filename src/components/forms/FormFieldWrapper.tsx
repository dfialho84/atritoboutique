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

type FormFieldRenderFn<TFieldValues extends FieldValues> = (params: {
    field: ControllerRenderProps<TFieldValues, Path<TFieldValues>>;
    placeholder?: string;
}) => React.ReactNode;

export type FormFieldProps<
    TFieldValues extends FieldValues = FieldValues,
    TContext = undefined,
    TTransformedValues extends TFieldValues = TFieldValues
> = {
    form: UseFormReturn<TFieldValues, TContext, TTransformedValues>;
    name: Path<TFieldValues>;
    label: string;
    placeholder?: string;
    description?: string;
    className?: string;
};

type FormFieldWrapperProps<
    TFieldValues extends FieldValues = FieldValues,
    TContext = undefined,
    TTransformedValues extends TFieldValues = TFieldValues
> = {
    render: FormFieldRenderFn<TFieldValues>;
} & FormFieldProps<TFieldValues, TContext, TTransformedValues>;

export default function FormFieldWrapper<
    TFieldValues extends FieldValues = FieldValues,
    TContext = undefined,
    TTransformedValues extends TFieldValues = TFieldValues
>({
    form,
    name,
    label,
    placeholder,
    description,
    className,
    render,
}: FormFieldWrapperProps<TFieldValues, TContext, TTransformedValues>) {
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
