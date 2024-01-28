import NavBar from "@/components/navbar/nav";
import Posts from "@/components/posts/posts";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-cache",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function Home() {
  const data = await getPosts();

  return (
    <div>
      <NavBar />
      <Posts data={data} />
    </div>
  );
}
