import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const SearchBar = () => {
    return (
        <div className="flex relative items-center gap-3">
            <input type="text" name="search" placeholder="Search" className="bg-white text-gray-700 px-8 h-10 w-64 xl:w-74 focus:outline-none" />
            <MagnifyingGlassIcon className="absolute text-gray-400 size-5 top-1/2 -translate-y-1/2 left-2" />
        </div>
    )
}

export default SearchBar
