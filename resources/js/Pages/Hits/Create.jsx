import React from "react";
import { Link, useForm } from '@inertiajs/react';
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Create = (props) => {
    const {data, setData, post} = useForm({
        hit1: "",
        hit2: "",
        hit3: "",
        hit4: "",
        hit5: "",
        hit6: "",
        hit7: "",
        hit8: "",
        hit9: "",
        hit10: "",
        hit11: "",
        hit12: "",
        hit13: "",
        hit14: "",
        hit15: "",
        hit16: "",
        hit17: "",
        hit18: "",
        hit19: "",
        hit20: "",
        hits: "",
        sum : ""
    })

    const handleSendPosts = (e) => {
        e.preventDefault();
        post("/hits");
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
                            <input type="text" placeholder="1射目" onChange={(e) => setData("hit1", e.target.value)}/>
                            <span className="text-red-600">{props.error.hit1}</span>
                        </div>                    

                        <div>
                            <h2>2射目</h2>
                            <textarea placeholder="2射目" onChange={(e) => setData("hit2", e.target.value)}></textarea>
                        </div>
                        <button type="submit" className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md">
                            send
                        </button>
                    </form>

                    <Link href="/hits">戻る</Link>
                </div>

            </Authenticated>
            );
    }

export default Create;