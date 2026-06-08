import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/admin")({
  component: AdminDashboard,
});

type Profile = {
  id: string;
  email: string | null;
  full_name: string | null;
  phone: string | null;
  referral_source: string | null;
  created_at: string;
};

type LogRow = {
  id: string;
  user_id: string | null;
  session_id: string | null;
  event_type: string;
  event_name: string;
  path: string | null;
  metadata: Record<string, unknown> | null;
  created_at: string;
};

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [allowed, setAllowed] = useState<boolean | null>(null);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [logs, setLogs] = useState<LogRow[]>([]);
  const [tab, setTab] = useState<"visitors" | "activity">("visitors");

  useEffect(() => {
    (async () => {
      const { data: userRes } = await supabase.auth.getUser();
      const uid = userRes.user?.id;
      if (!uid) {
        navigate({ to: "/auth" });
        return;
      }
      const { data: roleRow } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", uid)
        .eq("role", "admin")
        .maybeSingle();
      if (!roleRow) {
        setAllowed(false);
        return;
      }
      setAllowed(true);
      const [{ data: p }, { data: l }] = await Promise.all([
        supabase.from("profiles").select("*").order("created_at", { ascending: false }).limit(200),
        supabase.from("activity_log").select("*").order("created_at", { ascending: false }).limit(500),
      ]);
      setProfiles((p ?? []) as Profile[]);
      setLogs((l ?? []) as LogRow[]);
    })();
  }, [navigate]);

  if (allowed === null) {
    return <div className="min-h-screen flex items-center justify-center text-ink/60">Loading…</div>;
  }

  if (!allowed) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-serif text-4xl mb-3">Admin only</h1>
        <p className="text-ink/60 mb-6 max-w-md">
          Your account doesn't have admin access yet. Ask the site owner to grant you the admin role
          in the backend dashboard.
        </p>
        <Link to="/" className="text-mauve underline">Back to home</Link>
      </div>
    );
  }

  async function signOut() {
    await supabase.auth.signOut();
    navigate({ to: "/" });
  }

  return (
    <div className="min-h-screen bg-paper text-ink px-6 md:px-10 py-10">
      <header className="flex flex-wrap items-end justify-between gap-4 border-b border-ink/10 pb-6 mb-8">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-mauve">Admin</span>
          <h1 className="font-serif text-4xl mt-2">Visitors & activity</h1>
        </div>
        <div className="flex gap-3">
          <Link to="/" className="text-xs uppercase tracking-widest px-4 py-2 border border-ink/20 hover:border-ink">Home</Link>
          <button onClick={signOut} className="text-xs uppercase tracking-widest px-4 py-2 bg-ink text-paper hover:bg-mauve">
            Sign out
          </button>
        </div>
      </header>

      <div className="flex gap-6 mb-6 text-[11px] uppercase tracking-widest">
        <button
          onClick={() => setTab("visitors")}
          className={`pb-2 border-b-2 ${tab === "visitors" ? "border-mauve text-mauve" : "border-transparent text-ink/50"}`}
        >
          Visitors ({profiles.length})
        </button>
        <button
          onClick={() => setTab("activity")}
          className={`pb-2 border-b-2 ${tab === "activity" ? "border-mauve text-mauve" : "border-transparent text-ink/50"}`}
        >
          Activity ({logs.length})
        </button>
      </div>

      {tab === "visitors" ? (
        <div className="overflow-x-auto border border-ink/10">
          <table className="w-full text-sm">
            <thead className="bg-blush/30 text-left">
              <tr>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Phone</th>
                <th className="px-4 py-3 font-medium">Source</th>
                <th className="px-4 py-3 font-medium">Joined</th>
              </tr>
            </thead>
            <tbody>
              {profiles.map((p) => (
                <tr key={p.id} className="border-t border-ink/5">
                  <td className="px-4 py-3">{p.full_name ?? "—"}</td>
                  <td className="px-4 py-3">{p.email ?? "—"}</td>
                  <td className="px-4 py-3">{p.phone ?? "—"}</td>
                  <td className="px-4 py-3">{p.referral_source ?? "—"}</td>
                  <td className="px-4 py-3 text-ink/60">{new Date(p.created_at).toLocaleString()}</td>
                </tr>
              ))}
              {profiles.length === 0 && (
                <tr><td colSpan={5} className="px-4 py-8 text-center text-ink/50">No visitors yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="overflow-x-auto border border-ink/10">
          <table className="w-full text-sm">
            <thead className="bg-blush/30 text-left">
              <tr>
                <th className="px-4 py-3 font-medium">When</th>
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 font-medium">Event</th>
                <th className="px-4 py-3 font-medium">Path</th>
                <th className="px-4 py-3 font-medium">User</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((l) => (
                <tr key={l.id} className="border-t border-ink/5">
                  <td className="px-4 py-3 text-ink/60 whitespace-nowrap">{new Date(l.created_at).toLocaleString()}</td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 bg-mauve/10 text-mauve text-xs rounded">{l.event_type}</span></td>
                  <td className="px-4 py-3">{l.event_name}</td>
                  <td className="px-4 py-3 text-ink/60">{l.path ?? "—"}</td>
                  <td className="px-4 py-3 text-ink/60 text-xs">{l.user_id ? l.user_id.slice(0, 8) : "anon"}</td>
                </tr>
              ))}
              {logs.length === 0 && (
                <tr><td colSpan={5} className="px-4 py-8 text-center text-ink/50">No activity logged yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}