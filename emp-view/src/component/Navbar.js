import React from "react";

function Navbar(){
    return(
        <div className="flex bg-slate-500 item-center py-4 place-content-between">
            <div>
            <h1 className="text-2xl font-bold px-5 hover:cursor-pointer hover:text-blue-700">Empoyee Service 👨‍💻</h1>
            </div>
            <div className="space-x-3 mx-5">
            <a className="hover:text-blue-900 hover:cursor-pointer">Home</a>
            <a className="hover:text-blue-900 hover:cursor-pointer">Profile</a>
            <a className="hover:text-blue-900 hover:cursor-pointer">logout</a>
            </div>
        </div>
    );
}

export default Navbar;