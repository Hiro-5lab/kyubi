import React, {useState} from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from '@inertiajs/react'


function Records({ records }) {

    return (
        <div className ="w-4/7 bg-[#ced9d3] border-[#bbbcbc] shadow-md shadow-[#24382c]">
            { records.map((record)=>
                <div key={record.id}>   
                    <div className ="p-3 flex flex-row">
                        <h2 className="mx-6">{ record.title }</h2>
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
                </div>
            )}
        </div>
    );
}

export default Records;