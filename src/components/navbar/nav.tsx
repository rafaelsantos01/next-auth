import Auth from "@/app/auth/page";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

export default async function NavBar() {
  const session = await getServerSession(authOptions);

  return <Auth session={session} />;
}
