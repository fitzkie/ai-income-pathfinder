import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface EntitlementGateProps {
  locked: boolean;
  onUpgrade: () => void;
  children: React.ReactNode;
}

export function EntitlementGate({ locked, onUpgrade, children }: EntitlementGateProps) {
  if (!locked) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      <div className="pointer-events-none select-none blur-sm opacity-70">{children}</div>
      <div className="absolute inset-0 flex items-center justify-center rounded-lg border border-zinc-800 bg-black/80 p-6 text-center">
        <div className="max-w-sm space-y-3">
          <p className="text-sm font-semibold text-white">Locked Pro Content</p>
          <ul className="space-y-1 text-xs text-zinc-300">
            <li>Get all 9 sections with full tables and scripts.</li>
            <li>Copy prompts and track progress in-app.</li>
          </ul>
          <Button
            variant="outline"
            className="border-[#ebb437] text-[#ebb437]"
            onClick={onUpgrade}
          >
            Unlock Pro Playbook
          </Button>
          <Link href="/account" className="text-[11px] text-zinc-500 underline">
            Already purchased? Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
