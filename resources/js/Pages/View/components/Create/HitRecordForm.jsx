import { useForm } from "@inertiajs/react";
import HitForm from "./HitForm";

function HitRecordForm({ record, onChange }) {
    const { data, setData, put } = useForm({
        hits: record?.hits || Array(20).fill(null),
        hit_id:record?.hit_id || null,
    });

    const handleHitsChange = (e, newHits) => {
        e.preventDefault();
        const hitsCount = calculateHits(data.hits);
        const sumCount = calculateSum(data.hits);
        setData("hits", newHits);
        onChange(newHits); 
    };

    return (
        <HitForm
            initialData={data.hits}
            onSubmit={handleHitsChange}
        />
    );
}

export default HitRecordForm;
