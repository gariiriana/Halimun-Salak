"use client";

import { useState, useEffect } from "react";
import type { Kavling } from "@/types";
import { subscribeKavlings } from "@/lib/firestore";

export function useKavlings() {
  const [kavlings, setKavlings] = useState<Kavling[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = subscribeKavlings((data) => {
      setKavlings(data);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  return { kavlings, loading };
}
