//app/page.tsx
// import { UserButton } from "@clerk/nextjs";

import { fetchPosts } from "@/lib/actions/thread.actions";

export default async function Home() {
  const result = await fetchPosts(1, 30);
  console.log("res", result);
  return (
    <>
      {/* <UserButton afterSignOutUrl="/" /> */}
      <h1 className="text-white">Home</h1>
    </>
  );
}
