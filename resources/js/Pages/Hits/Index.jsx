import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/react';

const Index = (props) => {
    const {hits} = props;

    const handleDeletePost = (id) => {
        router.delete(`/hits/${id}`, {
            onBefore: () => confirm("本当に削除しますか？"),
        })
    }
    
    return (
        <Authenticated user={props.auth.user} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Hits
                </h2>
            }>
            
            <div className="p-12">
                <Link href="/hits/create">Create</Link>
                
                <h1>Hits</h1>
                
                { hits.map((hit) =>(
                    <div key={hit.id}>
                        <h2>
                            <Link href = {'/hits/${hit.id}'}>{hit.hit1}</Link>
                        </h2>
                        {Array.from({ length: 20 }, (_, i) => (
                            <React.Fragment key={`hit${i + 1}`}>
                            <span>{hit[`hit${i + 1}`]}</span>
                            {(i + 1) % 5 === 0 && <p />}
                        </React.Fragment>
                        ))}
                        <p>{hit.hits}</p>
                        <p>{hit.sum}</p>
                    </div>
                ))}
                <button className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md" 
                onClick={() => handleDeletePost(post.id)}>delete</button>
            </div>
            
        </Authenticated>
        );
}

export default Index;