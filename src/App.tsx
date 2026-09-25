import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import RequireTab from "./components/RequireTab";
import Index from "./pages/Index";
import SalesSOP from "./pages/SalesSOP";
import Sales from "./pages/Sales";
import Checklist from "./pages/Checklist";
import AdminSeed from "./pages/AdminSeed";
import Auth from "./pages/Auth";
import ResetPassword from "./pages/ResetPassword";
import CSM from "./pages/CSM";
import Field from "./pages/Field";
import Dispatch from "./pages/Dispatch";
import Projects from "./pages/Projects";
import Leads from "./pages/Leads";
import Reviews from "./pages/Reviews";
import Membership from "./pages/Membership";
import Insurance from "./pages/Insurance";
import AdminAccess from "./pages/AdminAccess";
import PreviewRoleSwitcher from "./components/PreviewRoleSwitcher";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/**
 * Signed in, and allowed this tab. Tab ids come from TABS in src/lib/access.ts
 * and the paths here must match the ones declared there — that map is what the
 * menu filters on and what an access request names.
 */
const tabbed = (tab: string, el: React.ReactNode) => (
  <RequireAuth>
    <RequireTab tab={tab}>{el}</RequireTab>
  </RequireAuth>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <PreviewRoleSwitcher />
        <Routes>
          <Route path="/auth" element={<Auth />} />
          {/* Public: recovery links must work for signed-out users. */}
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/" element={tabbed("csm-deck", <Index />)} />
          <Route path="/sales" element={tabbed("sales-guide", <SalesSOP />)} />
          {/* The slide deck this SOP was migrated from. Kept for training
              sessions; the book at /sales is the governing text. */}
          <Route path="/sales/deck" element={tabbed("sales-deck", <Sales />)} />
          <Route path="/checklist" element={tabbed("checklist", <Checklist />)} />
          <Route path="/admin/seed" element={tabbed("rubric-seed", <AdminSeed />)} />
          <Route path="/admin/access" element={tabbed("access-requests", <AdminAccess />)} />
          <Route path="/csm" element={tabbed("csm", <CSM />)} />
          <Route path="/field" element={tabbed("field", <Field />)} />
          <Route path="/dispatch" element={tabbed("dispatch", <Dispatch />)} />
          <Route path="/projects" element={tabbed("projects", <Projects />)} />
          <Route path="/leads" element={tabbed("leads", <Leads />)} />
          <Route path="/reviews" element={tabbed("reviews", <Reviews />)} />
          <Route path="/membership" element={tabbed("membership", <Membership />)} />
          <Route path="/insurance" element={tabbed("insurance", <Insurance />)} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
