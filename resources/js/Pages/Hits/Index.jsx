import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Index = (props) => {
    const {hits} = props;
    console.log(props);
    
    return (
        <Authenticated user={props.auth.user} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Hits
                </h2>
            }>
            
            <div className="p-12">
                <h1>Hits</h1>
                
                { hits.map((hit) =>(
                    <div key={hit.id}>
                        <h2>
                            <Link href = {'/hits/${hit.id}'}>{history.title}</Link>
                        </h2>
                        <p>{hit.hit1}</p>
                    </div>
                ))}
            </div>
            
        </Authenticated>
        );
}

export default Index;