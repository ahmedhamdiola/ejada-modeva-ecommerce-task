import type { Product } from "../../types"
import type { FieldInterface } from "./data"

interface ModalBody {
    fields: FieldInterface[],
    product?: Product
}

const ModalBody = ({ fields, product }: ModalBody) => {
    return (
        <div className="mt-5">
            {fields.map(field => {
                const defaultValue = product?.[field.name];
                return (
                    <div key={field.id} className="mt-3 flex justify-between border-b pb-5 border-gray-300 gap-40 items-center text-gray-500 last:border-none last:mb-5">
                        <h3 className="text-xl shrink-0 font-Lato w-40">{field.label}: </h3>
                        {field.type === "textarea" ? (
                            <textarea
                                name={field.name}
                                className="w-full rounded border border-gray-300 focus:outline-none px-5 py-2"
                                placeholder={field.placeholder}
                                defaultValue={defaultValue as string | number | undefined}
                                required
                            />
                        ) : field.type === "select" ? (
                            <select
                                name={field.name}
                                className="w-full rounded border border-gray-300 focus:outline-none px-5 py-2"
                                defaultValue={defaultValue as string | number | undefined}
                                required
                            >
                                {(field.options ?? ["Men", "Women", "Shoes", "Accessories"]).map(option => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        ) : field.type === "file" ? (
                            <input
                                type="file"
                                name={field.name}
                                accept="image/*"
                                className="w-full rounded border border-gray-300 focus:outline-none px-5 py-2"

                            />
                        ) : (
                            <input
                                type={field.type}
                                name={field.name}
                                className="w-full rounded border border-gray-300 focus:outline-none px-5 py-2"
                                placeholder={field.placeholder}
                                defaultValue={defaultValue as string | number | undefined}
                                required
                            />
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default ModalBody
