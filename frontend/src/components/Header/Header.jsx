import React from 'react'
import { CgProfile } from "react-icons/cg";

function Header() {
    return (
        <header className="shadow sticky z-50 top-0 m-0 w-auto p-2 bg-white border-gray-200 px-4">
            <nav className="lg:px-6 py-2.5 mt-0">
                <div className="flex flex-wrap justify-between items-center mx-auto">
                    <h1 className='text-black font-medium text-2xl'>Dashboard</h1>
                    <CgProfile className=' w-12 h-12'/>
                </div>
            </nav>
        </header>
    )
}

export default Header