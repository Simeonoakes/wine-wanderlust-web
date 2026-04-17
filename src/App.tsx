import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HashScroll from "@/components/HashScroll";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import TheVineyards from "./pages/TheVineyards.tsx";
import TheLandscape from "./pages/TheLandscape.tsx";
import TheCulture from "./pages/TheCulture.tsx";
import Contact from "./pages/Contact.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <HashScroll />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/the-vineyards" element={<TheVineyards />} />
          <Route path="/the-landscape" element={<TheLandscape />} />
          <Route path="/the-culture" element={<TheCulture />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
