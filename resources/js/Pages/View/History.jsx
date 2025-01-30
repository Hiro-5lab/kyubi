import React, {useState} from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from '@inertiajs/react'

const History = (props) => {
    const { posts } = props; 


    return (
        <>
            <div>
                <h1>2025年</h1>
                <li>
                    <ul>１月</ul>
                </li>
            </div>
        </>
    );
}

export default History;
