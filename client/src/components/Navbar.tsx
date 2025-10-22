import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { t } = useTranslation();
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/vehicles", label: t("nav.vehicles") },
    { path: "/about", label: t("nav.about") },
    { path: "/contact", label: t("nav.contact") },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link
            href="/"
            className="text-2xl font-bold text-primary hover-elevate active-elevate-2 px-3 py-1.5 rounded-md transition-all"
            data-testid="link-logo"
          >
            Premium Auto
          </Link>

          <div className="hidden md:flex items-center justify-center flex-1 gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <Button variant="default" data-testid="button-contact-desktop">
              {t("nav.contactUs")}
            </Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover-elevate active-elevate-2 rounded-md"
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-lg"
          data-testid="mobile-menu"
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors hover-elevate active-elevate-2 ${
                  location === link.path ? "text-primary" : "text-foreground"
                }`}
                data-testid={`link-mobile-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 space-y-3 border-t border-border/40">
              <LanguageSwitcher />
              <Button
                variant="default"
                className="w-full"
                data-testid="button-contact-mobile"
              >
                {t("nav.contactUs")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
