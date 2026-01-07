import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    category: "Ordering & Purchasing",
    questions: [
      {
        q: "How can I order uniforms for my school?",
        a: "Schools can contact us directly via phone (123456789) or email (info@gmail.com) to set up a partnership. We'll work with your administration to understand your specific requirements and create a customized uniform program.",
      },
      {
        q: "Is there a minimum order quantity?",
        a: "Minimum order quantities vary depending on the type of customization required. For standard items with basic embroidery, we can accommodate smaller orders. For fully custom designs, we typically require a minimum of 50 units per style.",
      },
      {
        q: "How long does it take to receive an order?",
        a: "Standard orders are typically ready within 2-3 weeks. Custom orders with unique designs or special requirements may take 4-6 weeks. We recommend placing orders well in advance of the school year.",
      },
      {
        q: "Do you offer bulk discounts?",
        a: "Yes, we offer tiered pricing based on order volume. The larger your order, the better the per-unit pricing. Contact us for a customized quote based on your school's needs.",
      },
    ],
  },
  {
    category: "Products & Quality",
    questions: [
      {
        q: "What fabrics do you use?",
        a: "We use premium quality fabrics including cotton, poly-cotton blends, and specialty performance fabrics. All our materials are selected for durability, comfort, and easy care. We also offer eco-friendly fabric options.",
      },
      {
        q: "Are your uniforms machine washable?",
        a: "Yes, all our uniforms are designed to be machine washable and maintain their shape and color through repeated washing. Care instructions are included with every garment.",
      },
      {
        q: "Can you match our school's specific colors?",
        a: "Absolutely! We offer custom color matching services to ensure your uniforms perfectly match your school's colors and branding guidelines.",
      },
      {
        q: "Do you offer uniforms for all ages?",
        a: "Yes, we provide uniforms for students from pre-school through high school (ages 4-18). Each size range is designed with age-appropriate fits and features.",
      },
    ],
  },
  {
    category: "Sizing & Fit",
    questions: [
      {
        q: "How do I find the right size?",
        a: "We provide comprehensive sizing charts for all our products. Visit our Sizing Guide page for detailed measurements. For partner schools, we can arrange fitting sessions.",
      },
      {
        q: "What if the uniform doesn't fit?",
        a: "We offer size exchanges for unworn items with tags attached. Contact your school's uniform coordinator or reach out to us directly within 14 days of purchase.",
      },
      {
        q: "Do you offer custom sizing for students with special needs?",
        a: "Yes, we accommodate custom sizing and modifications for students with special requirements. Please contact us to discuss specific needs.",
      },
    ],
  },
  {
    category: "Customization",
    questions: [
      {
        q: "Can you add our school logo?",
        a: "Yes, we offer embroidery and printing services for school logos, crests, and text. High-quality embroidery is our specialty, ensuring your school's identity is proudly displayed.",
      },
      {
        q: "Can we create a completely custom design?",
        a: "Absolutely! We work with schools to create unique uniform designs that reflect their identity and values. Our design team will guide you through the entire process.",
      },
      {
        q: "What customization options are available?",
        a: "We offer embroidered logos, screen printing, custom colors, piping, buttons, and more. We can customize virtually every aspect of your school's uniform.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <Layout>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our products and services"
        breadcrumb="FAQ"
      />

      <section className="section-padding">
        <div className="container-page max-w-4xl">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="font-serif text-2xl font-semibold mb-6 text-primary">
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${categoryIndex}-${index}`}
                    className="card-elevated border-none"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left font-medium hover:no-underline hover:text-gold">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="section-padding bg-secondary">
        <div className="container-page text-center">
          <h2 className="heading-section mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="tel:123456789"
              className="inline-flex items-center gap-2 text-gold font-medium hover:underline"
            >
              Call us: 123456789
            </a>
            <a
              href="mailto:info@gmail.com"
              className="inline-flex items-center gap-2 text-gold font-medium hover:underline"
            >
              Email: info@gmail.com
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
