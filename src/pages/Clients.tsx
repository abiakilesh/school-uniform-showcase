import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";

// 25 client schools
const clients = [
  { name: "St. Mary's Academy", initials: "SMA" },
  { name: "Greenfield High School", initials: "GHS" },
  { name: "Royal Grammar School", initials: "RGS" },
  { name: "Sunrise Elementary", initials: "SE" },
  { name: "Wellington College", initials: "WC" },
  { name: "Oakwood Academy", initials: "OA" },
  { name: "Riverdale School", initials: "RS" },
  { name: "Cambridge Prep", initials: "CP" },
  { name: "Hillside Academy", initials: "HA" },
  { name: "Lakewood School", initials: "LS" },
  { name: "Eastside High", initials: "EH" },
  { name: "Westfield Academy", initials: "WA" },
  { name: "Northgate School", initials: "NS" },
  { name: "Southview College", initials: "SC" },
  { name: "Central Academy", initials: "CA" },
  { name: "Valley View School", initials: "VVS" },
  { name: "Mountain Peak Academy", initials: "MPA" },
  { name: "Harbor School", initials: "HS" },
  { name: "Forest Grove Academy", initials: "FGA" },
  { name: "Meadow School", initials: "MS" },
  { name: "Skyline Academy", initials: "SA" },
  { name: "Bridgewater School", initials: "BS" },
  { name: "Parkview Academy", initials: "PA" },
  { name: "Sunnyside School", initials: "SS" },
  { name: "Coastal Academy", initials: "CLA" },
];

const Clients = () => {
  return (
    <Layout>
      <PageHeader
        title="Our Clients"
        subtitle="Proud partners with leading educational institutions"
        breadcrumb="Partner Schools"
      />

      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-16">
            <p className="text-gold font-medium mb-3">Trusted By</p>
            <h2 className="heading-section mb-4">25+ Partner Schools</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're honored to serve these distinguished educational institutions, 
              providing quality uniforms that reflect their values and traditions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="card-elevated p-6 text-center hover:shadow-elevated transition-all group"
              >
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                  <span className="font-serif font-bold text-lg text-primary group-hover:text-primary-foreground transition-colors">
                    {client.initials}
                  </span>
                </div>
                <p className="font-medium text-sm text-foreground">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-page text-center">
          <h2 className="heading-section mb-4">Become a Partner School</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join our growing family of partner schools and experience the difference 
            that quality uniforms can make for your students.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gold" />
              <span>Dedicated Account Manager</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gold" />
              <span>Custom Design Services</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gold" />
              <span>Volume Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gold" />
              <span>Priority Support</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;
