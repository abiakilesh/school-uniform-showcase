interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="container-page text-center">
        {breadcrumb && (
          <p className="text-gold text-sm font-medium mb-3 animate-fade-in">
            {breadcrumb}
          </p>
        )}
        <h1 className="heading-display mb-4 animate-slide-up">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
