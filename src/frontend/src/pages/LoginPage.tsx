import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";
import { useState } from "react";

interface LoginPageProps {
  onLogin: () => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  function handleLogin() {
    if (code === "PRO123") {
      setError("");
      onLogin();
    } else {
      setError("Invalid access code. Please try again.");
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleLogin();
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-[380px] flex-1 flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/15 border border-primary/30 mb-4">
            <span className="text-2xl">📄</span>
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            InvoicePro <span className="text-primary">X</span>
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Business tools for professionals
          </p>
        </div>

        {/* Login card */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-card w-full">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="access-code"
                className="text-sm font-display text-foreground/80"
              >
                Access Code
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="access-code"
                  type="password"
                  placeholder="Enter your code"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                    setError("");
                  }}
                  onKeyDown={handleKeyDown}
                  className="pl-10 bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-primary"
                  data-ocid="login-code-input"
                  autoFocus
                />
              </div>
              {error && (
                <p className="text-destructive text-xs font-body">{error}</p>
              )}
            </div>

            <Button
              onClick={handleLogin}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold transition-smooth"
              data-ocid="login-submit"
            >
              Access App
            </Button>
          </div>

          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-center text-xs text-muted-foreground">
              Don&apos;t have a code?{" "}
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Get access
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-4">
        <div className="max-w-[380px] mx-auto px-4 text-center">
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()}.{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200"
            >
              Built with love using caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
