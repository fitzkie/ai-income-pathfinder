import { useEffect, useState } from "react";

const STORAGE_KEY = "ai-income-pathfinder-saved";

const readSaved = (): string[] => {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
};

export const useSavedPlaybooks = () => {
  const [saved, setSaved] = useState<string[]>(() => readSaved());

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  }, [saved]);

  const toggleSaved = (slug: string) => {
    setSaved((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  };

  const isSaved = (slug: string) => saved.includes(slug);

  return { saved, toggleSaved, isSaved };
};
