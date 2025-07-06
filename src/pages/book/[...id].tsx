import { useRouter } from "next/router";

export default function Page() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <div>
                <h1>Book Page {id} </h1>
            </div>
        </>
    );
}