import React, {useState} from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from '@inertiajs/react'

const Operarion = (props) => {
    const { posts } = props; 


    return (
        <>
            <div>
                <h3>検索</h3>
                <h3>ソート</h3>
            </div>
            <div>新しい記録の作成</div>
        </>
    );
}

export default Operarion;
