import React, { useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { useParams } from "react-router-dom";

function Feedback({ props }) {
    const { feedback_id } = useParams();
    const { feedbacks } = props;

    const feedback = feedbacks.find(
        (feedback) => feedback_id === parseInt(feedback_id)
    );

    if (!feedback) {
        return <div>Feedback not found.</div>;
    }
    return (
        <>
            <div>
                <h1>フィードバック</h1>
                <h3>From {Feedback.user_id.name}</h3>
                <h2>{feedback.feedback}</h2>
                <p>{feedback.created_at}</p>
            </div>
        </>
    );
}

export default Feedback;
