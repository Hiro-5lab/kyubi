import React, {useState} from "react";
import Header from './components/Layout/Header.jsx';
import { Link, useForm } from '@inertiajs/react'

import Authenticated from "@/Layouts/AuthenticatedLayout";

const Edit = (props) => {
    const {record} = props;
    const { data, setData, put } = useForm({
        title:record.title,
        date:record.date,
        place:record.place,
        comment:record.comment
    })

    const handleSendRecords = (e) => {
        e.preventDefault();
        put(`/View/${record.id}`);
    }

    return (
        <div className ="bg-gray-50">
            <Header user={props.auth.user} />
            <form onSubmit={handleSendRecords}>
                <div>
                    <h2>Title</h2>
                        <input type="text" placeholder="タイトル" value={record.title} 
                        onChange={(e) => setData("title", e.target.value)}/>
                        <span className="text-red-600">{props.errors.title}</span>
                </div>
                <div>
                    <h2>Date</h2>
                        <input type="date" value={record.date} 
                        onChange={(e) => setData("date", e.target.value)}/>
                        <span className="text-red-600">{props.errors.date}</span>
                </div>
                <div>
                    <h2>Place</h2>
                        <input type="text" placeholder="場所" value={record.place} 
                        onChange={(e) => setData("place", e.target.value)}/>
                        <span className="text-red-600">{props.errors.place}</span>
                </div>
                <div>
                    <h2>Comment</h2>
                       <textarea placeholder="コメント"  
                       onChange={(e) => setData("comment", e.target.value)}></textarea>
                </div>
                <button type="submit" className="px-3 py-1">
                    作成
                </button>
            </form>

            <Link href="/View">戻る</Link>
        </div>
    );
}

export default Edit;
