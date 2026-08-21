import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Index from "./pages/Index";
import SalesSOP from "./pages/SalesSOP";
import Sales from "./pages/Sales";
import Checklist from "./pages/Checklist";
import AdminSeed from "./pages/AdminSeed";
import Auth from "./pages/Auth";
import CSM from "./pages/CSM";
import Field from "./pages/Field";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const gated = (el: React.ReactNode) => <RequireAuth>{el}</RequireAuth>;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={gated(<Index />)} />
          <Route path="/sales" element={gated(<SalesSOP />)} />
          {/* The slide deck this SOP was migrated from. Kept for training
              sessions; the book at /sales is the governing text. */}
          <Route path="/sales/deck" element={gated(<Sales />)} />
          <Route path="/checklist" element={gated(<Checklist />)} />
          <Route path="/admin/seed" element={gated(<AdminSeed />)} />
          <Route path="/csm" element={gated(<CSM />)} />
          <Route path="/field" element={gated(<Field />)} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
