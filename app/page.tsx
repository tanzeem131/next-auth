import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export default async function Home() {
  const session = await getServerSession();
  return <div>{JSON.stringify(session)}</div>;
}
