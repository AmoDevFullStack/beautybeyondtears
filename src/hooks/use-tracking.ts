import { useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";

const SESSION_KEY = "bbt_session_id";

function getSessionId(): string {
  if (typeof window === "undefined") return "";
  let id = sessionStorage.getItem(SESSION_KEY);
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

export async function trackEvent(
  eventType: string,
  eventName: string,
  metadata: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") return;
  try {
    const { data } = await supabase.auth.getSession();
    const userId = data.session?.user?.id ?? null;
    await supabase.from("activity_log").insert({
      user_id: userId,
      session_id: getSessionId(),
      event_type: eventType,
      event_name: eventName,
      path: window.location.pathname,
      metadata,
      user_agent: navigator.userAgent,
    });
  } catch (err) {
    console.warn("track failed", err);
  }
}

export function usePageView(name: string) {
  const sent = useRef(false);
  useEffect(() => {
    if (sent.current) return;
    sent.current = true;
    void trackEvent("page_view", name);
  }, [name]);
}

export function useClickTracking() {
  return (name: string, metadata: Record<string, unknown> = {}) =>
    trackEvent("click", name, metadata);
}