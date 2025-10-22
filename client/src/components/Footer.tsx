import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-card border-t border-card-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center space-y-2">
          <p
            className="text-sm text-muted-foreground"
            data-testid="text-copyright"
          >
            {t("footer.copyright")}
          </p>
          <p className="text-sm text-muted-foreground">
            {t("footer.softiumTechnologies")}{" "}
            <a
              href="https://softiumtechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors underline"
              data-testid="link-softium"
            >
              Softium Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
