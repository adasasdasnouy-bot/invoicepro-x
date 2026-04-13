import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import { AppPage } from "./pages/AppPage";
import { LoginPage } from "./pages/LoginPage";

const SESSION_KEY = "invoicepro_authed";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  });

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  function handleLogin() {
    sessionStorage.setItem(SESSION_KEY, "1");
    setIsAuthenticated(true);
  }

  function handleLogout() {
    sessionStorage.removeItem(SESSION_KEY);
    setIsAuthenticated(false);
  }

  return (
    <>
      {isAuthenticated ? (
        <AppPage onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
      <Toaster position="top-center" richColors />
    </>
  );
}
