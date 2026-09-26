import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Index from "./pages/Index";
import SalesSOP from "./pages/SalesSOP";
import Sales from "./pages/Sales";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/** Signed in. */
const authed = (el: React.ReactNode) => <RequireAuth>{el}</RequireAuth>;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          {/* Public: recovery links must work for signed-out users. */}
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/" element={authed(<Index />)} />
          <Route path="/sales" element={authed(<SalesSOP />)} />
          {/* The slide deck this SOP was migrated from. Kept for training
              sessions; the book at /sales is the governing text. */}
          <Route path="/sales/deck" element={authed(<Sales />)} />
          <Route path="/csm" element={authed(<CSM />)} />
          <Route path="/field" element={authed(<Field />)} />
          <Route path="/dispatch" element={authed(<Dispatch />)} />
          <Route path="/projects" element={authed(<Projects />)} />
          <Route path="/leads" element={authed(<Leads />)} />
          <Route path="/reviews" element={authed(<Reviews />)} />
          <Route path="/membership" element={authed(<Membership />)} />
          <Route path="/insurance" element={authed(<Insurance />)} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
