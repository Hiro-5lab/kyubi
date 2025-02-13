import React, { useState } from "react";
 
import { Link, router } from "@inertiajs/react";

function Header({ user }) {
    return (
        <div className="w-full h-20 p-4 text-[#fefefe] bg-[#059857] shadow-sm shadow-[#cccccc] fixed top-0 left-0 z-50 flex items-center">
            <div className="mx-auto w-[70%] flex justify-between">
                <div className="font-bold text-center p-6">
                    <Link href="/View">
                        <h1>弓美</h1>
                    </Link>
                </div>
                <div className="p-6">
                    <ul className="flex mx-10 space-x-4 text-right">
                        <il>user-status : </il>
                        <il>{user.name}</il>
                        <il>{user.belongings_id}</il>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
