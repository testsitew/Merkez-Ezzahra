import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import {
  HomePage,
  QuranPage,
  ArabicPage,
  SciencesPage,
  PricingPage,
  ContactPage,
} from './pages/PublicPages.tsx';
import { AdminLogin } from './components/admin/AdminLogin';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { SiteConfigProvider } from './context/SiteConfigContext';
import { LanguageProvider } from './context/LanguageContext.tsx';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  if (!isAdmin) return <Navigate to="/admin-secret-access" replace />;
  return <>{children}</>;
};

export default function MainRouter() {
  return (
    <SiteConfigProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<App />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/institut-du-coran" element={<QuranPage />} />
              <Route path="/langue-arabe" element={<ArabicPage />} />
              <Route path="/sciences-islamiques" element={<SciencesPage />} />
              <Route path="/tarifs-inscription" element={<PricingPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Route>
            <Route path="/admin-secret-access" element={<AdminLogin />} />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </SiteConfigProvider>
  );
}
