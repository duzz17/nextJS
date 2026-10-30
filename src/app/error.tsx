"use client";

import { useRouter } from "next/navigation";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();
  const handleError = () => {
    // router.refresh();
    // reset();
    window.location.replace("/");
  };
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={handleError}>Thử lại</button>
    </div>
  );
};
export default Error;
