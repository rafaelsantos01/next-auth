import client from "../../../../prisma/client";

export async function GET(request: any) {
  const user = await client.user.findMany();

  return new Response("Hello, Next.js");
}
