"use client";
import { useState } from "react";
export default function TodoPage() {
  const [error, setError] = useState<Error | null>(null);
  const handleClick = () => {
    try {
      throw new Error("todo Error");
    } catch (error: any) {
      setError(error);
    }
  };
  if (error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      <h1>Todo Page</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
