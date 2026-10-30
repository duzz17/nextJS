import { Suspense } from "react";
import { connection } from "next/server";

async function HomeContent() {
  await connection();

  const shouldThrow = Math.random() < 0.5;

  console.log(shouldThrow);

  if (shouldThrow) {
    throw Error("fdfdfd");
  }

  return <h1>HomePage</h1>;
}

export default function Home() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <HomeContent />
    </Suspense>
  );
}
