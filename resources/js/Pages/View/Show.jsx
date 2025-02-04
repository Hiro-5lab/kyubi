import React, {useState} from "react";

import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from '@inertiajs/react'

const Show = (props) => {
    const { record } = props;
    
    return (
        <div className ="bg-gray-50">
            <div>
                <h1>{ record.title }</h1>
                <h2>{ record.date }</h2>
                <h2>{ record.place }</h2>
                <p>{ record.comment }</p>
                <Link href="/View">戻る</Link>
                <div>
                    <Link href={`/View/${record.id}/edit`}>編集</Link>
                </div>
            </div>
        </div>
    );
}

export default Show;
