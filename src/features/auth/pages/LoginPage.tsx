"use client";

import { authClient } from "@/lib/auth-client";
import LoginForm from "../components/LoginForm";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  useEffect(() => {
    if (isPending && session) {
      router.replace("/");
    }
  }, [session, router]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-screen items-center justify-center w-full">
      <LoginForm />
    </div>
  );
}
