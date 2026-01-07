import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Shirt, Palette, Scissors, Package, Truck, HeadphonesIcon } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Custom Design",
    description: "Work with our design team to create unique uniforms that reflect your school's identity, colors, and values. From initial concept to final product.",
    features: [
      "School-specific color matching",
      "Logo and crest design",
      "Style consultation",
      "Sample production",
    ],
  },
  {
    icon: Shirt,
    title: "Uniform Manufacturing",
    description: "High-quality manufacturing using premium fabrics and expert craftsmanship. Every uniform is made to last.",
    features: [
      "Premium fabric selection",
      "Expert tailoring",
      "Quality control checks",
      "Consistent sizing",
    ],
  },
  {
    icon: Scissors,
    title: "Custom Embroidery",
    description: "Professional embroidery services for school logos, names, and custom designs on all uniform pieces.",
    features: [
      "High-quality thread",
      "Precise logo reproduction",
      "Name personalization",
      "Durable stitching",
    ],
  },
  {
    icon: Package,
    title: "Bulk Orders",
    description: "Efficient processing of large-scale orders for schools of all sizes with competitive volume pricing.",
    features: [
      "Volume discounts",
      "Flexible quantities",
      "Organized packaging",
      "Inventory management",
    ],
  },
  {
    icon: Truck,
    title: "Delivery Services",
    description: "Reliable delivery directly to your school or designated distribution points with tracking available.",
    features: [
      "Direct school delivery",
      "Order tracking",
      "Secure packaging",
      "Flexible scheduling",
    ],
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Support",
    description: "Dedicated support team to assist with orders, sizing questions, and any concerns throughout your partnership.",
    features: [
      "Dedicated account manager",
      "Size exchange assistance",
      "Order status updates",
      "Quick response times",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive uniform solutions for educational institutions"
        breadcrumb="What We Offer"
      />

      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-16">
            <p className="text-gold font-medium mb-3">Complete Solutions</p>
            <h2 className="heading-section mb-4">End-to-End Uniform Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From design to delivery, we provide comprehensive services to meet all 
              your school uniform needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-elevated p-8">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary">
        <div className="container-page">
          <div className="text-center mb-16">
            <p className="text-gold font-medium mb-3">Our Process</p>
            <h2 className="heading-section mb-4">How We Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A streamlined process designed to make partnering with us simple and efficient.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Discuss your requirements and vision" },
              { step: "02", title: "Design", desc: "Create custom designs for approval" },
              { step: "03", title: "Production", desc: "Manufacture with quality control" },
              { step: "04", title: "Delivery", desc: "Deliver directly to your school" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-page text-center">
          <h2 className="heading-section mb-4">Ready to Get Started?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6">
            Contact us today to discuss how we can serve your school's uniform needs.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="tel:123456789"
              className="inline-flex items-center gap-2 bg-gold text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-gold/90 transition-colors"
            >
              Call: 123456789
            </a>
            <a
              href="mailto:info@gmail.com"
              className="inline-flex items-center gap-2 border border-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              Email: info@gmail.com
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
