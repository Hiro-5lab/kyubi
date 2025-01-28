import React from "react";
import { Link, useForm } from '@inertiajs/react';
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Edit = (props) => {
    const {hit} = props;
    const {data, setData, put} = useForm({
        hit1: hit.hit1,
        hit2: hit.hit2
    })

    const handleSendPosts = (e) => {
        e.preventDefault();
        put(`/posts/${hit.id}`);
    }

    return (
        <Authenticated user={props.auth.user} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create
                </h2>
            }>
            
            <div className="p-12">
                
                <form onSubmit={handleSendPosts}>
                    <div>
                        <h2>1射目</h2>
                        <input type="text" placeholder="1射目" value={data.title} onChange={(e) => setData("title", e.target.value)}/>
                        <span className="text-red-600">{props.errors.title}</span>
                    </div>                    
                    
                    <div>
                        <h2>2射目</h2>
                        <textarea placeholder="2射目" value={data.body} onChange={(e) => setData("body", e.target.value)}></textarea>
                        <span className="text-red-600">{props.errors.body}</span>
                    </div>
                    
                    <button type="submit" className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md">send</button>
                </form>
                
                <Link href="/posts">戻る</Link>
            </div>
            
        </Authenticated>
        );
}

export default Edit;
