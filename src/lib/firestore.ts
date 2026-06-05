import {
  collection,
  doc,
  onSnapshot,
  updateDoc,
  addDoc,
  getDocs,
  setDoc,
  writeBatch,
  serverTimestamp,
  query,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { db } from "./firebase";
import type { Kavling, Lead, KavlingStatus } from "@/types";

/* ───────────── Kavling CRUD ───────────── */

export function subscribeKavlings(callback: (kavlings: Kavling[]) => void) {
  const q = query(collection(db, "kavlings"), orderBy("number"));
  return onSnapshot(q, (snapshot) => {
    const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as Kavling));
    callback(data);
  });
}

export async function updateKavlingStatus(kavlingId: string, status: KavlingStatus) {
  const ref = doc(db, "kavlings", kavlingId);
  await updateDoc(ref, { status });
}

export async function seedKavling(kavling: Omit<Kavling, "id">) {
  const ref = doc(db, "kavlings", kavling.number);
  await setDoc(ref, kavling);
}

export async function seedKavlingsBatch(kavlings: Omit<Kavling, "id">[]) {
  const batch = writeBatch(db);
  kavlings.forEach((kavling) => {
    const ref = doc(db, "kavlings", kavling.number);
    batch.set(ref, kavling);
  });
  await batch.commit();
}

export async function checkKavlingsExist(): Promise<boolean> {
  const snapshot = await getDocs(collection(db, "kavlings"));
  return !snapshot.empty;
}

/* ───────────── Leads CRUD ───────────── */

export async function addLead(lead: Omit<Lead, "id" | "createdAt">) {
  return addDoc(collection(db, "leads"), {
    ...lead,
    createdAt: serverTimestamp(),
  });
}

export function subscribeLeads(callback: (leads: Lead[]) => void) {
  const q = query(collection(db, "leads"), orderBy("createdAt", "desc"));
  return onSnapshot(q, (snapshot) => {
    const data = snapshot.docs.map((d) => {
      const raw = d.data();
      return {
        id: d.id,
        name: raw.name,
        phone: raw.phone,
        kavlingId: raw.kavlingId,
        createdAt: raw.createdAt instanceof Timestamp ? raw.createdAt.toDate() : new Date(),
      } as Lead;
    });
    callback(data);
  });
}
