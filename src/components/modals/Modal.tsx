import { useState, type FormEvent } from "react"
import type { Product } from "../../types"
import type { FieldInterface } from "./data"
import ModalBody from "./ModalBody"
import ModalFooter from "./ModalFooter"
import ModalHeader from "./ModalHeader"
import uploadImage from "../../services/cloudinary"
import { toast } from "react-toastify"

interface ModalProps {
    onClose: () => void,
    heading: string,
    fields: FieldInterface[]
    product?: Product
    onSubmit: (values: Record<string, string>, product?: Product) => void
    submitLabel?: string
}

const Modal = ({ heading, onClose, fields, product, onSubmit, submitLabel = "Submit" }: ModalProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData(event.currentTarget);
            const values: Record<string, string> = {};

            for (const [key, value] of formData) {
                if (value instanceof File && value.size > 0) {
                    try {
                        values[key] = await uploadImage(value);
                    } catch (error) {
                        toast.error("Image upload failed. Please try again.");
                        return;
                    }
                } else if (value instanceof File) {
                    values[key] = "";
                } else {
                    values[key] = value;
                }
            }

            onSubmit(values, product);
        } catch (error) {
            toast.error("Unable to submit product. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="fixed inset-0 bg-black/50 select-none" onClick={onClose}>
            <div className="fixed absolute flex justify-center items-center w-full h-full top-0 left-0 p-5">
                <div className="w-full max-w-3xl rounded-2xl bg-white p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                    <ModalHeader heading={heading} onClose={onClose} />
                    <form onSubmit={handleSubmit}>
                        <ModalBody fields={fields} product={product} />
                        <ModalFooter submitLabel={submitLabel} isSubmitting={isSubmitting} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal
