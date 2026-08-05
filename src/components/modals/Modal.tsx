import type { FormEvent } from "react"
import type { Product } from "../../types"
import type { FieldInterface } from "./data"
import ModalBody from "./ModalBody"
import ModalFooter from "./ModalFooter"
import ModalHeader from "./ModalHeader"

interface ModalProps {
    onClose: () => void,
    heading: string,
    fields: FieldInterface[]
    product?: Product
    onSubmit: (values: Record<string, string>, product?: Product) => void
    submitLabel?: string
}

const Modal = ({ heading, onClose, fields, product, onSubmit, submitLabel = "Submit" }: ModalProps) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const values = Object.fromEntries(formData.entries()) as Record<string, string>;

        onSubmit(values, product);
    };

    return (
        <div className="fixed inset-0 bg-black/50 select-none" onClick={onClose}>
            <div className="fixed absolute flex justify-center items-center w-full h-full top-0 left-0 p-5">
                <div className="w-full max-w-3xl rounded-2xl bg-white p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                    <ModalHeader heading={heading} onClose={onClose} />
                    <form onSubmit={handleSubmit}>
                        <ModalBody fields={fields} product={product} />
                        <ModalFooter submitLabel={submitLabel} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal
