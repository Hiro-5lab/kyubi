import React, {useState} from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from '@inertiajs/react'

const Records = (props) => {
    const { posts } = props; 


    return (
        <>
            <div>
                <h3>date</h3>
                <h3>place</h3>
            </div>
            <div>
                <h1>記録</h1>
                <h2>メモ</h2>
            </div>
            <div>フィードバック</div>
        </>
    );
}

export default Records;