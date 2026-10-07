"use client";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient, useConvexAuth } from "convex/react";
import { SignIn } from "@/components/SignIn";
import { ReactNode } from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL || "http://localhost:3001");

function AuthWrapper({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading } = useConvexAuth();
  if (isLoading) return <div className="min-h-screen bg-[#fff6f9] flex items-center justify-center text-[#1b7f9e] font-semibold animate-pulse">Authenticating Secure Connection...</div>;
  if (!isAuthenticated) return <SignIn />;
  return <>{children}</>;
}

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <ConvexAuthProvider client={convex}>
      <AuthWrapper>{children}</AuthWrapper>
    </ConvexAuthProvider>
  );
}
