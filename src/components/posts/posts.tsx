"use client";

export default function Posts({ data }: any) {
  console.log(data);
  return (
    <div className="bg-black flex justify-center">
      <div className="">
        <h1 className="text-red-700 underline text-2xl">Posts</h1>
        <div className="flex items-center justify-center">
          <ul>
            {data.map((res, index) => (
              <li key={index} className="text-red-700">
                {res.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
