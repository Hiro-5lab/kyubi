import React, {useState} from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from '@inertiajs/react'


function Header({user}) {
    //const [couunt, setCount] = useState(0);

    return(
        <>
            <div className ="flex mx-10 flex-row border-b-2 border-dashed border-[#bbbcbc]">
                <div className ="font-bold text-center p-6 w-2/5">
                    <Link><h1>弓美</h1></Link>
                </div>
                <div className ="w-3/5 p-6">
                    <ul className = "flex mx-10 space-x-4 text-right">
                        <il>user-status : </il>
                        <il>{ user.name }</il>
                        <il>{ user.email }</il>
                        <il>{ user.belongings_id }</il>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;
