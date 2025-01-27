import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/react';

const Show = (props) => {
    const { hit } = props;

    return(
        <Authenticated user={props.auth.user} header ={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Hits
            </h2>
        }>

            <div className="p-12">
                <h1>{ hit.title }</h1>

                <div>
                    <h3>本文</h3>
                    <p>{ hits.hit1 }</p>
                </div>
                <div>
                    <Link href="/hits">戻る</Link>
                </div>
            </div>

        </Authenticated>

    )
}

export default Show;
