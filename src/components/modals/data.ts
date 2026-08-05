import type { Product } from "../../types";

export const MODAL_EDIT_FIELDS: FieldInterface[] = [
    {
        id: "name",
        label: "Product Name",
        name: "name",
        placeholder: "Enter product name",
        type: "text",
    },
    {
        id: "description",
        label: "Description",
        name: "description",
        placeholder: "Enter product description",
        type: "textarea",
    },
    {
        id: "price",
        label: "Price",
        name: "price",
        placeholder: "Enter product price",
        type: "number",
    },
    {
        id: "soldAmount",
        label: "Sold Amount",
        name: "soldAmount",
        placeholder: "Enter sold amount",
        type: "number",
    },
    {
        id: "category",
        label: "Category",
        name: "category",
        placeholder: "Select product category",
        type: "select",
        options: ["Men", "Women", "Shoes", "Accessories"],
    },
    {
        id: "image",
        label: "Image",
        name: "image",
        placeholder: "Upload product image",
        type: "file",
    },
];

export const MODAL_ADD_FIELDS: FieldInterface[] = [
    {
        id: "name",
        label: "Product Name",
        name: "name",
        placeholder: "Enter product name",
        type: "text",
    },
    {
        id: "description",
        label: "Description",
        name: "description",
        placeholder: "Enter product description",
        type: "textarea",
    },
    {
        id: "price",
        label: "Price",
        name: "price",
        placeholder: "Enter product price",
        type: "number",
    },
    {
        id: "soldAmount",
        label: "Sold Amount",
        name: "soldAmount",
        placeholder: "Enter sold amount",
        type: "number",
    },
    {
        id: "category",
        label: "Category",
        name: "category",
        placeholder: "Select product category",
        type: "select",
        options: ["Men", "Women", "Shoes", "Accessories"],
    },
    {
        id: "image",
        label: "Image",
        name: "image",
        placeholder: "Upload product image",
        type: "file",
    },
    {
        id: "rating",
        label: "Rating",
        name: "rating",
        placeholder: "Enter rating",
        type: "number",
    },
];

export interface FieldInterface {
    id: string,
    label: string,
    name: keyof Product,
    placeholder: string,
    type: string,
    options?: string[],
}