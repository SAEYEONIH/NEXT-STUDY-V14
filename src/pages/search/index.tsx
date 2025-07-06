import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { q } = router.query;

  return (
    <>
      <div>
        <h1>Search Page {q}</h1>
      </div>
    </>
  );
}