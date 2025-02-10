import { useForm } from "@inertiajs/react";
import HitForm from "./HitForm";

function HitRecordForm({ record }) {
    const { data, setData, put } = useForm({
        hits: record?.hits || Array(20).fill(null),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const hitsCount = calculateHits(data.hits);
        const sumCount = calculateSum(data.hits);

        put(`/records/${record.id}`, {
            hits: data.hits,
            hitsCount,
            sumCount,
        });
    };

    return (
        <HitForm
            initialData={data.hits}
            onSubmit={(hits) => setData("hits", hits)}
        />
    );
}

export default HitRecordForm;
