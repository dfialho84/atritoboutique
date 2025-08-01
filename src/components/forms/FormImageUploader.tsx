import { Controller, useFormContext } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils";
import { useCallback, useState } from "react";
import {
    closestCenter,
    DndContext,
    DragEndEvent,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    arrayMove,
    horizontalListSortingStrategy,
    SortableContext,
    useSortable,
} from "@dnd-kit/sortable";
import Image from "next/image";
import { Button } from "../ui/button";
import { GripVertical, X } from "lucide-react";
import { CSS } from "@dnd-kit/utilities";

type FormImageUploaderProps = {
    name: string;
};

type ImageToUpload = {
    file: File;
    preview: string;
};

type SortableImageProps = {
    image: ImageToUpload;
    index: number;
    onRemove: (index: number) => void;
};

function SortableImage({ image, index, onRemove }: SortableImageProps) {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: image.preview });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className="relative w-24 h-24 rounded overflow-hidden border border-muted shadow-sm shrink-0"
        >
            <Image
                src={image.preview}
                alt={`Image ${index}`}
                width={100}
                height={100}
                className="object-cover w-full h-full"
            />
            <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => onRemove(index)}
                className="absolute top-0 right-0 m-1 h-6 w-6 p-0"
            >
                <X className="w-4 h-4" />
            </Button>
            <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute bottom-0 left-0 m-1 h-6 w-6 p-0 cursor-move"
                {...attributes}
                {...listeners}
            >
                <GripVertical className="w-4 h-4" />
            </Button>
        </div>
    );
}

export default function FormImageUploader({ name }: FormImageUploaderProps) {
    const [images, setImages] = useState<ImageToUpload[]>([]);
    const { control, setValue } = useFormContext();
    const sensors = useSensors(useSensor(PointerSensor));
    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            const newImages = acceptedFiles.map((file) => ({
                file,
                preview: URL.createObjectURL(file),
            }));
            const updated = [...images, ...newImages];
            setImages(updated);
            setValue(
                name,
                updated.map((img) => img.file)
            );
        },
        [images, name, setValue]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { "image/*": [] },
        multiple: true,
    });

    const onDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (!over || active.id === over.id) return;

        const oldIndex = images.findIndex((i) => i.preview === active.id);
        const newIndex = images.findIndex((i) => i.preview === over.id);
        const updated = arrayMove(images, oldIndex, newIndex);
        setImages(updated);
        setValue(
            name,
            updated.map((img) => img.file)
        );
    };

    const onRemove = (index: number) => {
        const updated = [...images];
        updated.splice(index, 1);
        setImages(updated);
        setValue(
            name,
            updated.map((img) => img.file)
        );
    };

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={[]}
            render={() => {
                return (
                    <div className="space-y-2">
                        <div
                            {...getRootProps()}
                            className={cn(
                                "border border-dashed rounded p-6 text-center cursor-pointer",
                                isDragActive ? "bg-muted/50" : ""
                            )}
                        >
                            <input {...getInputProps()} />
                            <p className="text-sm text-muted-foreground">
                                Arraste imagens aqui ou clique para selecionar
                            </p>
                        </div>

                        {images.length > 0 && (
                            <DndContext
                                sensors={sensors}
                                collisionDetection={closestCenter}
                                onDragEnd={onDragEnd}
                            >
                                <SortableContext
                                    items={images.map((img) => img.preview)}
                                    strategy={horizontalListSortingStrategy}
                                >
                                    <div className="flex gap-2 overflow-x-auto py-2">
                                        {images.map((image, index) => (
                                            <SortableImage
                                                key={image.preview}
                                                image={image}
                                                index={index}
                                                onRemove={onRemove}
                                            />
                                        ))}
                                    </div>
                                </SortableContext>
                            </DndContext>
                        )}
                    </div>
                );
            }}
        />
    );
}
