import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Page imports
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// About page
import AboutUs from "./pages/AboutUs";

// Services pages
import EligibilityAssessment from "./pages/services/EligibilityAssessment";
import AdmissionSupport from "./pages/services/AdmissionSupport";

// Destinations pages
import USA from "./pages/destinations/USA";
import UK from "./pages/destinations/UK";
import Canada from "./pages/destinations/Canada";
import Australia from "./pages/destinations/Australia";
import Germany from "./pages/destinations/Germany";

// Other main pages
import Universities from "./pages/Universities";
import Programs from "./pages/Programs";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";

const App = () => {
  // Create a new QueryClient instance inside the component
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Main pages */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Services pages */}
            <Route path="/services/eligibility" element={<EligibilityAssessment />} />
            <Route path="/services/admissions" element={<AdmissionSupport />} />
            
            {/* Study destinations pages */}
            <Route path="/destinations/usa" element={<USA />} />
            <Route path="/destinations/uk" element={<UK />} />
            <Route path="/destinations/canada" element={<Canada />} />
            <Route path="/destinations/australia" element={<Australia />} />
            <Route path="/destinations/germany" element={<Germany />} />
            
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
