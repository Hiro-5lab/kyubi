import React, {useState} from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from '@inertiajs/react';


function Records({ records }) {

    const handleDeleteRecord = (id) => {
        router.delete(`/View/${id}`, {
            onBefore: () => confirm("本当に削除しますか？"),
        })
    }

    return (
        <div className ="w-4/7">
            { records.map((record)=>
                <div key={record.id} className="m-3 py-2 shadow-md rounded-md">
                    <div className ="p-3 flex flex-row">
                        <h2 className="mx-6">
                        <Link href={`/View/${record.id}`}>{ record.title }</Link>
                        </h2>
                        <h2 className="mx-6">{ record.date }</h2>
                        <h2 className="mx-6">{ record.place }</h2>
                    </div>
                    <div className="px-3">
                        <div className="m-2">
                            <h2>的中記録</h2>
                            <p className="mx-2">内容</p>
                        </div>
                        <div className="m-2">
                            <h2>メモ</h2>
                            <p className="mx-2">{ record.comment }</p>
                        </div>
                    </div>
                    <button className="mx-3 px-3 py-1.5 font-bold">フィードバック</button>
                    <button className="mx-3 px-3 py-1.5 font-bold" onClick={()=> handleDeleteRecord(record.id)}>
                        削除
                    </button>
                </div>
            )}
        </div>
    );
}

export default Records;