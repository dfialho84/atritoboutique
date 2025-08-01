import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { cn } from "@/lib/utils";

export type FormCheckProps<
    TFieldValues extends FieldValues = FieldValues,
    TContext = undefined,
    TTransformedValues extends TFieldValues = TFieldValues
> = {
    form: UseFormReturn<TFieldValues, TContext, TTransformedValues>;
    name: Path<TFieldValues>;
    label: string;
    className?: string;
};

export default function FormCheck<
    TFieldValues extends FieldValues = FieldValues,
    TContext = undefined,
    TTransformedValues extends TFieldValues = TFieldValues
>({
    form,
    name,
    label,
    className,
}: FormCheckProps<TFieldValues, TContext, TTransformedValues>) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => {
                return (
                    <FormItem
                        className={cn(
                            "flex flex-row items-center gap-2",
                            className
                        )}
                    >
                        <FormControl>
                            <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                            />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                            {label}
                        </FormLabel>
                    </FormItem>
                );
            }}
        />
    );
}
