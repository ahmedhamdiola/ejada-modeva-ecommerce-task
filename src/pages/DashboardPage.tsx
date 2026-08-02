import { PlusIcon } from "@heroicons/react/16/solid";
import DashboardTable from "../components/dashboard/DashboardTable";
import DashboardCardsContainer from "../components/dashboard/DashboardCardsContainer";
import Button from "../components/ui/Button";
import useDashboardProducts from "../hooks/useDashboardProducts";

const DashboardPage = () => {
    const { products, deleteProduct, editProduct } = useDashboardProducts();
    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-3xl font-bold">Products</h1>
                <Button title="ADD PRODUCT" Icon={PlusIcon} />
            </div>
            <DashboardTable products={products} onDelete={deleteProduct} onEdit={editProduct} />
            <DashboardCardsContainer products={products} onDelete={deleteProduct} onEdit={editProduct} />
        </div>
    );
};
export default DashboardPage