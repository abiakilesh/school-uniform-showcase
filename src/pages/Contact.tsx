import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "123456789",
    action: "tel:123456789",
    actionText: "Call us now",
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@gmail.com",
    action: "mailto:info@gmail.com",
    actionText: "Send an email",
  },
  {
    icon: MapPin,
    title: "Address",
    details: "123 Uniform Street, Education City, EC 12345",
    action: null,
    actionText: null,
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Monday - Saturday: 9:00 AM - 6:00 PM\nSunday: Closed",
    action: null,
    actionText: null,
  },
];

const Contact = () => {
  return (
    <Layout>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Get in touch with our team."
        breadcrumb="Get In Touch"
      />

      <section className="section-padding">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <p className="text-gold font-medium mb-3">Reach Out</p>
              <h2 className="heading-section mb-6">Let's Start a Conversation</h2>
              <p className="text-muted-foreground mb-8">
                Whether you're a school administrator looking for a uniform supplier, 
                a parent with questions, or you simply want to learn more about our 
                services, we're here to help.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="card-elevated p-6 flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold mb-1">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {info.details}
                      </p>
                      {info.action && (
                        <a
                          href={info.action}
                          className="inline-block mt-2 text-sm font-medium text-gold hover:underline"
                        >
                          {info.actionText} →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form Placeholder / Additional Info */}
            <div className="bg-secondary rounded-2xl p-8 lg:p-12">
              <h3 className="font-serif text-2xl font-semibold mb-6">
                Ready to Partner With Us?
              </h3>
              <p className="text-muted-foreground mb-8">
                For schools interested in partnering with us for their uniform needs, 
                please contact us directly via phone or email. Our team will be happy 
                to discuss your requirements and provide a customized quote.
              </p>

              <div className="space-y-6">
                <div className="p-6 bg-card rounded-xl border border-border">
                  <h4 className="font-semibold mb-2">For Schools</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Interested in becoming a partner school? Contact our dedicated 
                    school accounts team for custom pricing and design services.
                  </p>
                  <a
                    href="tel:123456789"
                    className="text-gold font-medium hover:underline"
                  >
                    Call: 123456789
                  </a>
                </div>

                <div className="p-6 bg-card rounded-xl border border-border">
                  <h4 className="font-semibold mb-2">For Parents</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Looking for uniforms for your child's school? Please check with 
                    your school's administration for ordering details.
                  </p>
                  <a
                    href="mailto:info@gmail.com"
                    className="text-gold font-medium hover:underline"
                  >
                    Email: info@gmail.com
                  </a>
                </div>

                <div className="p-6 bg-card rounded-xl border border-border">
                  <h4 className="font-semibold mb-2">General Inquiries</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    For all other questions, our customer service team is available 
                    during business hours.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Mon - Sat: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-secondary">
        <div className="container-page py-12">
          <div className="aspect-[16/6] bg-muted rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                123 Uniform Street, Education City, EC 12345
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
