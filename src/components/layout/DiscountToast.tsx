import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const DiscountToast = () => {
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) return null;

    return (
        <div className="fixed z-51 w-full bg-[#008E93] px-4 py-3 text-white font-Lato">
            <div className="flex items-center justify-between gap-4">
                <div className="flex justify-center w-full">
                    <p className="text-sm font-medium lg:text-xl">
                        Discount 20% For New Member, <span className="font-bold">ONLY FOR TODAY!!</span>
                    </p>
                </div>

                <button onClick={() => setIsOpen(false)} className="rounded p-1 transition cursor-pointer">
                    <XMarkIcon className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
};

export default DiscountToast;