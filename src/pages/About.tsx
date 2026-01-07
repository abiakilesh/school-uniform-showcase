import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";

const values = [
  {
    icon: CheckCircle,
    title: "Quality",
    description: "We never compromise on the quality of our fabrics and craftsmanship.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Every uniform is crafted with meticulous attention to detail.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description: "We continuously improve our designs and manufacturing processes.",
  },
  {
    icon: Heart,
    title: "Care",
    description: "We treat every school and student as part of our extended family.",
  },
];

const milestones = [
  { year: "1995", event: "Company founded with a vision to transform school uniforms" },
  { year: "2000", event: "Expanded to serve 10 partner schools" },
  { year: "2010", event: "Introduced eco-friendly fabric options" },
  { year: "2015", event: "Celebrated 20 years with 20+ partner schools" },
  { year: "2020", event: "Launched modern fit uniform collections" },
  { year: "2024", event: "Serving 25+ schools and 50,000+ students" },
];

const About = () => {
  return (
    <Layout>
      <PageHeader
        title="About Us"
        subtitle="Three decades of excellence in school uniform manufacturing"
        breadcrumb="Our Story"
      />

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-medium mb-3">Our Story</p>
              <h2 className="heading-section mb-6">A Legacy of Excellence Since 1995</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  What started as a small tailoring shop with a passion for quality has grown into 
                  one of the region's most trusted school uniform manufacturers. For over 30 years, 
                  we've been dedicated to creating uniforms that students are proud to wear.
                </p>
                <p>
                  Our founder believed that every student deserves to feel confident and comfortable 
                  in their school attire. This belief continues to drive everything we do today, from 
                  selecting the finest fabrics to ensuring perfect fits for students of all sizes.
                </p>
                <p>
                  Today, we partner with over 25 schools, serving more than 50,000 students annually. 
                  Each uniform we create carries our commitment to quality, durability, and style.
                </p>
              </div>
            </div>
            <div className="bg-secondary rounded-2xl p-8">
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="font-serif font-bold text-primary">{milestone.year}</span>
                    </div>
                    <div className="flex-shrink-0 w-px bg-border relative">
                      <div className="absolute top-1 -left-1.5 w-3 h-3 rounded-full bg-gold" />
                    </div>
                    <p className="text-muted-foreground">{milestone.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-elevated p-8">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide schools with exceptional quality uniforms that promote pride, unity, 
                and identity while ensuring comfort and durability for every student. We strive 
                to be a trusted partner in education by delivering products that meet the highest 
                standards of craftsmanship.
              </p>
            </div>
            <div className="card-elevated p-8">
              <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading school uniform manufacturer recognized for innovation, 
                sustainability, and unwavering commitment to quality. We envision a future 
                where every student wears a uniform that reflects their school's values and 
                inspires confidence in their educational journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-16">
            <p className="text-gold font-medium mb-3">What Drives Us</p>
            <h2 className="heading-section mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every uniform we create.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
