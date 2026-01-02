import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Landing from "@/pages/Landing";
import Wizard from "@/pages/Wizard";
import Results from "@/pages/Results";
import Admin from "@/pages/Admin";
import HustleDetail from "@/pages/HustleDetail";
import ProPlaybook from "@/pages/ProPlaybook";
import Library from "@/pages/Library";
import Account from "@/pages/Account";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/wizard" component={Wizard} />
      <Route path="/results" component={Results} />
      <Route path="/hustles/:id" component={HustleDetail} />
      <Route path="/pro/:id" component={ProPlaybook} />
      <Route path="/library" component={Library} />
      <Route path="/account" component={Account} />
      <Route path="/admin" component={Admin} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
