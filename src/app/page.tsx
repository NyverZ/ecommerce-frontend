"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

export default function Home() {
  const handleLogout = async () => {
    await authClient.signOut();
    alert("signed out");
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 ">
      <h1 className="text-4xl font-bold ">...</h1>
      <Button onClick={handleLogout}>Sig Out</Button>
    </div>
  );
}
