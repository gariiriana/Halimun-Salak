"use client";

import { useState, useEffect } from "react";
import type { Lead } from "@/types";
import { subscribeLeads } from "@/lib/firestore";

export function useLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = subscribeLeads((data) => {
      setLeads(data);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  return { leads, loading };
}
