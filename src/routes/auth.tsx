import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { trackEvent } from "@/hooks/use-tracking";

export const Route = createFileRoute("/auth")({
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [referral, setReferral] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/" });
    });
  }, [navigate]);

  async function handleEmail(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin,
            data: { full_name: fullName, phone, referral_source: referral },
          },
        });
        if (error) throw error;
        await trackEvent("auth", "signup_email", { email });
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        await trackEvent("auth", "login_email", { email });
      }
      navigate({ to: "/" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogle() {
    setError(null);
    setLoading(true);
    await trackEvent("auth", "google_oauth_start");
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      setError(result.error.message ?? "Google sign-in failed");
      setLoading(false);
      return;
    }
    if (result.redirected) return;
    navigate({ to: "/" });
  }

  return (
    <div className="min-h-screen bg-paper text-ink flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <Link
          to="/"
          className="text-[10px] uppercase tracking-[0.3em] text-ink/50 hover:text-mauve transition-colors"
        >
          ← Back to home
        </Link>
        <h1 className="font-serif text-4xl md:text-5xl mt-6 mb-3 leading-tight">
          {mode === "signup" ? "Join the sisterhood" : "Welcome back"}
        </h1>
        <p className="text-ink/60 mb-8 text-sm leading-relaxed">
          {mode === "signup"
            ? "Create an account so we can walk alongside you, send gentle updates, and remember your story."
            : "Sign in to continue your journey with Beauty Beyond Tears."}
        </p>

        <button
          type="button"
          onClick={handleGoogle}
          disabled={loading}
          className="w-full mb-6 border border-ink/20 px-5 py-3 text-sm hover:border-ink hover:bg-blush/20 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.83z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"/>
          </svg>
          Continue with Google
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="h-px bg-ink/10 flex-1" />
          <span className="text-[10px] uppercase tracking-widest text-ink/40">or with email</span>
          <div className="h-px bg-ink/10 flex-1" />
        </div>

        <form onSubmit={handleEmail} className="space-y-4">
          {mode === "signup" && (
            <>
              <input
                type="text"
                placeholder="Full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                maxLength={120}
                className="w-full border border-ink/20 px-4 py-3 text-sm focus:outline-none focus:border-mauve bg-paper"
              />
              <input
                type="tel"
                placeholder="Phone (optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength={32}
                className="w-full border border-ink/20 px-4 py-3 text-sm focus:outline-none focus:border-mauve bg-paper"
              />
              <select
                value={referral}
                onChange={(e) => setReferral(e.target.value)}
                className="w-full border border-ink/20 px-4 py-3 text-sm focus:outline-none focus:border-mauve bg-paper"
              >
                <option value="">How did you hear about us? (optional)</option>
                <option value="friend">A friend or family member</option>
                <option value="facebook">Facebook</option>
                <option value="tiktok">TikTok</option>
                <option value="event">A gathering / event</option>
                <option value="book">Life of a Widow (book)</option>
                <option value="other">Other</option>
              </select>
            </>
          )}
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={255}
            className="w-full border border-ink/20 px-4 py-3 text-sm focus:outline-none focus:border-mauve bg-paper"
          />
          <input
            type="password"
            required
            minLength={6}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            maxLength={128}
            className="w-full border border-ink/20 px-4 py-3 text-sm focus:outline-none focus:border-mauve bg-paper"
          />
          {error && (
            <p className="text-sm text-red-700 bg-red-50 border border-red-100 px-3 py-2">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-ink text-paper py-3 text-[11px] uppercase tracking-widest hover:bg-mauve transition-all disabled:opacity-50"
          >
            {loading ? "Please wait…" : mode === "signup" ? "Create account" : "Sign in"}
          </button>
        </form>

        <p className="mt-6 text-sm text-ink/60 text-center">
          {mode === "signup" ? "Already have an account?" : "New here?"}{" "}
          <button
            type="button"
            onClick={() => setMode(mode === "signup" ? "signin" : "signup")}
            className="text-mauve hover:underline"
          >
            {mode === "signup" ? "Sign in" : "Create one"}
          </button>
        </p>
      </div>
    </div>
  );
}