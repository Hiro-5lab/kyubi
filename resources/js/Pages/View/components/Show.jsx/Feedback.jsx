import React, { useState } from "react";

import { useParams } from "react-router-dom";

function Feedback({ item }) {
    console.log(item);
    if (!item.feedback) {
        return <div>Feedback not found.</div>;
    }

    const formatDate = (datetime) => {
        if (!datetime) return "Invalid date";

        const dateObj = new Date(datetime);
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, "0");
        const day = String(dateObj.getDate()).padStart(2, "0");
        const hours = String(dateObj.getHours()).padStart(2, "0");
        const minutes = String(dateObj.getMinutes()).padStart(2, "0");

        return `${year}-${month}-${day} ${hours}:${minutes}`;
    };

    return (
        <>
            <div className="mt-1 pt-2 border-t-2 border-[#fefefe]">
                <h3 className="text-right">From {item.user.name}</h3>
                <h2 className="text-[#292929]">{item.feedback}</h2>
                <p className="text-right">{formatDate(item.created_at)}</p>
            </div>
        </>
    );
}

export default Feedback;
