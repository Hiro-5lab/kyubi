import React, {useState} from "react";
import Header from './components/Layout/Header.jsx';
import { Link, useForm } from '@inertiajs/react'

import Authenticated from "@/Layouts/AuthenticatedLayout";

const Create = (props) => {
    const { hits } = props;
    const { data, setData, post } = useForm({
        title:"",
        date:"",
        place:"",
        hits_id: hits[0].id,
        comment:""
    })

    const handleSendRecords = (e) => {
        e.preventDefault();
        post("/View");
    }

    return (
        <div className ="bg-[#fefefe]">
            <Header user={props.auth.user} />
            <form onSubmit={handleSendRecords}>
                <div>
                    <h2>Title</h2>
                        <input type="text" placeholder="タイトル" onChange={(e) => setData("title", e.target.value)}/>
                        <span className="text-red-600">{props.errors.title}</span>
                </div>
                <div>
                    <h2>Date</h2>
                        <input type="date" onChange={(e) => setData("date", e.target.value)}/>
                        <span className="text-red-600">{props.errors.date}</span>
                </div>
                <div>
                    <h2>Place</h2>
                        <input type="text" placeholder="場所" onChange={(e) => setData("place", e.target.value)}/>
                        <span className="text-red-600">{props.errors.place}</span>
                </div>
                
                <div>
                    <h2>Hits</h2>
                    <select onChange={e =>setData("hits_id", e.target.value)}>
                    {hits.map((hit) =>
                        <option value={hit.id}>{hit.id}</option>
                    )}
                    </select>
                </div>
                
                <div>
                    <h2>Comment</h2>
                       <textarea placeholder="コメント" onChange={(e) => setData("comment", e.target.value)}></textarea>
                </div>
                <button type="submit" className="px-3 py-1">
                    作成
                </button>
            </form>

            <Link href="/View">戻る</Link>
        </div>
    );
}

export default Create;
