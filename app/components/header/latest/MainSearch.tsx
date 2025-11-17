import React from 'react'
import { LuSearch } from "react-icons/lu";

const MainSearch = () => {
    return (
        <>
            <form action="https://index.veycet.com/web/browse" className={`bg-gray-100 rounded-full h-[34px] flex place-items-center pl-5 gap-2 max-w-[50%] grow group hover:shadow hover:bg-white`}>
                <input type="text"
                    className={`w-full bg-transparent outline-none text-sm`}
                    placeholder='Search for Businesses...'
                />
                <button className={`h-full bg-gray-500 min-w-[70px] w-[70px] rounded-full text-white flex place-items-center place-content-center text-xl group-hover:bg-gray-700 group-hover:cursor-pointer`}>
                    <LuSearch />
                </button>
            </form>
        </>
    )
}

export default MainSearch
