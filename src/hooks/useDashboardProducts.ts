import { useState } from "react";
import { PRODUCTS, type ProductInterface } from "../components/dashboard/data"

const useDashboardProducts = () => {
    const [products, setProducts] = useState<ProductInterface[]>(PRODUCTS);

    const deleteProduct = (id: number) => {
        setProducts(prev =>
            prev.filter(product => product.id !== id)
        );
    };
    const addProduct = (product: ProductInterface) => {
        setProducts(prev => [...prev, product]);
    };
    const editProduct = (updatedProduct: ProductInterface) => {
        setProducts(prev =>
            prev.map(product =>
                product.id === updatedProduct.id
                    ? updatedProduct
                    : product
            )
        );
    };


    return {
        products,
        deleteProduct,
        addProduct,
        editProduct
    };

}
export default useDashboardProducts