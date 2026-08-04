import type { Product } from "../types";
import { API_URL } from "./";
import axios from "axios";

const API_LINK = API_URL + "/products";

const getAllProducts = async () => {
    const { data } = await axios.get<Product[]>(API_LINK)
    return data
}

const getMostRecentProducts = async () => {
    const url = new URL(API_LINK);
    url.searchParams.append('sortBy', 'id');
    url.searchParams.append('order', 'desc');
    url.searchParams.append('page', '1');
    url.searchParams.append('limit', '4');
    const API_RECENT = url.toString()
    const { data } = await axios.get<Product[]>(API_RECENT)
    return data
}

const getMostSoldProducts = async () => {
    const url = new URL(API_LINK);
    url.searchParams.append('sortBy', 'soldAmount');
    url.searchParams.append('order', 'desc');
    url.searchParams.append('page', '1');
    url.searchParams.append('limit', '4');
    const API_RECENT = url.toString()
    const { data } = await axios.get<Product[]>(API_RECENT)
    return data
}

const addProduct = async (product: Product) => {
    await axios.post(API_LINK, product)
}

const editProduct = async (product: { id: number, product: Product }) => {
    await axios.put<Product>(`${API_LINK}/${product.id}`, product.product)
};

const deleteProduct = async (id: number) => {
    await axios.delete(`${API_LINK}/${id}`)
};


export { getAllProducts, addProduct, editProduct, deleteProduct, getMostRecentProducts, getMostSoldProducts }