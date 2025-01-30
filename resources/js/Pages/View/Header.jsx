import React, {useState} from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from '@inertiajs/react'

const Header = (props) => {
    const { posts } = props; 


    return (
        <>
            <div>
                弓美
            </div>
            <div>
                user-status
            </div>
        </>
    );
}

export default Header;
