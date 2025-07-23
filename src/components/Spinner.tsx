import { LoaderCircle } from "lucide-react";

type SpinnerProps = {
    size?: number;
};

export default function Spinner({ size = 32 }: SpinnerProps) {
    return (
        <LoaderCircle
            className="animate-spin"
            size={size}
            color="currentColor"
        />
    );
}
