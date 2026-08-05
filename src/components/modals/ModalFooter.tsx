import Button from "../ui/Button"

interface ModalFooterProps {
    submitLabel?: string
    isSubmitting?: boolean
}

const ModalFooter = ({ submitLabel = "Submit", isSubmitting = false }: ModalFooterProps) => {
    return (
        <div className="flex justify-center items-center py-5">
            <Button
                title={submitLabel}
                type="submit"
                className="w-full max-w-sm justify-center text-xl"
                disabled={isSubmitting}
                isLoading={isSubmitting}
            />
        </div>
    )
}

export default ModalFooter
