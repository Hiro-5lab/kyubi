import React, {useState} from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from '@inertiajs/react'

function Operarion() {

    return (
        <>
            <div className ="p-3 flex flex-row">
                <div className="w-2/5">
                    <Link href="/View/create">
                    <button className="mx-12 px-12 py-3 font-bold">
                    新しい記録の作成</button>
                    </Link>
                </div>
                <div className ="w-3/5">
                    <button className="mx-6 px-6 py-3 font-bold">
                        検索</button>
                    <button className="mx-6 px-6 py-3 font-bold">
                        ソート</button>
                </div>
            </div>
        </>
    );
}

export default Operarion;
