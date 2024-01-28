import client from "../../../../prisma/client";

export async function GET(request: any) {
  const allPosts = await client.post.findMany();

  return Response.json(allPosts);
}
