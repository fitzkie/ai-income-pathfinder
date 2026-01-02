import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PaywallModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  upgradeUrl: string;
  onDevUnlock?: () => void;
}

export function PaywallModal({ open, onOpenChange, upgradeUrl, onDevUnlock }: PaywallModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-zinc-800 bg-black text-white">
        <DialogHeader>
          <DialogTitle className="text-lg">Unlock the Pro Playbook</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm text-zinc-300">
          <p>Get the full 9-section playbook with tables, scripts, and prompts.</p>
          <ul className="space-y-2">
            <li>Full action plan + monetization breakdown</li>
            <li>Copy-ready outreach templates and prompts</li>
            <li>Checklist tracking and premium upgrades</li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <Button asChild className="bg-[#ebb437] text-black hover:bg-[#d6a931]">
              <a href={upgradeUrl} target="_blank" rel="noreferrer">
                Unlock for $19
              </a>
            </Button>
            {onDevUnlock ? (
              <Button
                variant="outline"
                className="border-zinc-700 text-zinc-200"
                onClick={onDevUnlock}
              >
                Already purchased? Sign in
              </Button>
            ) : null}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
