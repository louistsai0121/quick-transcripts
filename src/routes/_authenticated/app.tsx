import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/app")({
  head: () => ({
    meta: [
      { title: "Dashboard — Video Speed Reader" },
      { name: "description", content: "Your Video Speed Reader dashboard." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AppPage,
});

function AppPage() {
  const { session } = Route.useRouteContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [signingOut, setSigningOut] = useState(false);

  async function handleSignOut() {
    setSigningOut(true);
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/", replace: true });
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b border-border/50">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="text-base font-bold tracking-tight">
            Video Speed Reader
          </Link>
          <button
            type="button"
            onClick={handleSignOut}
            disabled={signingOut}
            className="rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80 disabled:opacity-60"
          >
            {signingOut ? "Signing out…" : "Sign out / 登出"}
          </button>
        </div>
      </header>

      <main className="hero-glow flex flex-1 items-center justify-center px-4">
        <div className="max-w-lg text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Hi {session.user.email}
          </h1>
          <p className="mt-4 text-muted-foreground">
            Your dashboard is coming soon. Upload functionality will be added in the next
            milestone.
          </p>
        </div>
      </main>
    </div>
  );
}
