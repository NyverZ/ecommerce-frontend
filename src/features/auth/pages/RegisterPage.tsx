"use client";

import { Atom } from "react-loading-indicators";
import { authClient } from "@/lib/auth-client";
import RegisterForm from "../components/RegisterForm";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  useEffect(() => {
    if (!isPending && session) {
      router.replace("/");
    }
  }, [session, isPending,router]);

  if (isPending) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Atom color="#ff00d9" size="large" text="" textColor="#333" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center w-full">
      <RegisterForm />
    </div>
  );
}
