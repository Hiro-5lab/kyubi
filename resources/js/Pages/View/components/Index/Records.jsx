import React, {useState} from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from '@inertiajs/react';
import HitRecord from "../Layout/HitRecord.jsx";;


function Records({ records, hits }) {

    const handleDeleteRecord = (id) => {
        router.delete(`/View/${id}`, {
            onBefore: () => confirm("本当に削除しますか？"),
        })
    }

    return (
        <div className ="my-2">
            { records.map((record)=>
                <div key={record.id} className="m-3 py-2 border-2 rounded-md no-underline border-[#9fdafc]">
                    <Link href={`/View/${record.id}`}><div className ="p-3 flex justify-between">
                        <h2 className="mx-6">
                        { record.title }
                        </h2>
                        <div className="float-right">
                            <h2 className="mx-6">{ record.date }</h2>
                            <h2 className="mx-6">{ record.place }</h2>
                        </div>
                    </div>
                    </Link>
                    <div className="px-3">
                        <div className="m-2">
                            <h2>的中記録</h2>
                            <HitRecord hits={hits}/>
                        </div>
                        <div className="m-2">
                            <h2>メモ</h2>
                            <p className="mx-2">{ record.comment }</p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button className="m-2 px-3 py-1 font-bold text-[#cccccc] hover:text-[#9fdafc]">
                            フィードバック</button>
                        <button onClick={()=> handleDeleteRecord(record.id)} 
                            className="m-2 px-3 py-1 font-bold text-[#cccccc] hover:text-[#fc8947]">
                            削除
                        </button>
                    </div>
                    
                </div>
            )}
        </div>
    );
}

export default Records;