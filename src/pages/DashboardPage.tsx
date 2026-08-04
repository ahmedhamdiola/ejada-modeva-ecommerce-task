import { PlusIcon } from "@heroicons/react/16/solid";
import DashboardTable from "../components/dashboard/DashboardTable";
import DashboardCardsContainer from "../components/dashboard/DashboardCardsContainer";
import Button from "../components/ui/Button";
import useProducts from "../hooks/useProducts";

const DashboardPage = () => {
    const { data: products, isError, isLoading } = useProducts();
    return (
        <>
            {isError && <p className="text-red-500 h-screen">Error loading products</p>}
            {isLoading && <p className="text-gray-500 h-screen">Loading products...</p>}
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <h1 className="text-3xl font-bold">Products</h1>
                    <Button title="ADD PRODUCT" Icon={PlusIcon} onClick={() => { console.log("Add Product clicked") }} />
                </div>
                {products && <DashboardTable products={products} />}
                {products && <DashboardCardsContainer products={products} />}
            </div>
        </>
    );
};
export default DashboardPage