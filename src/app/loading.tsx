import Spinner from "@/components/Spinner";

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-gray-500 text-xl">Carregando... </div>
            <div className="mt-4">
                <Spinner size={64} />
            </div>
        </div>
    );
}
