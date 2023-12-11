"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);

  useEffect(() => {
    if (!shouldFetch) return;

    fetch("http://localhost:3000/api/hello")
      .then((res) => res.text()) // res.json() for JSON
      .then((data) => {
        setData(data);
      });

    setShouldFetch(false);
  }, [shouldFetch]);

  const handleClick = () => {
    setShouldFetch(true);
  };

  return (
    <div className="text-center mt-4">
      <button
        onClick={handleClick}
        className=" bg-slate-500 w-fit p-2 rounded "
      >
        NestJS API
      </button>
      <h1 className=" mt-2">{data}</h1>
    </div>
  );
}
