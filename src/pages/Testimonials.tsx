import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Principal, St. Mary's Academy",
    content: "We've been partnering with School Uniforms for over 15 years. The quality and consistency of their products are unmatched. Our students take pride in wearing their uniforms.",
    rating: 5,
  },
  {
    name: "Michael Thompson",
    role: "Director, Greenfield High School",
    content: "The team went above and beyond to create custom designs that perfectly represent our school's identity. The turnaround time was impressive.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Administrator, Royal Grammar School",
    content: "Excellent service from start to finish. They listened to our needs and delivered uniforms that exceeded our expectations in terms of quality and durability.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Head Teacher, Wellington College",
    content: "As a new partner school, we were impressed by the professionalism and attention to detail. The fitting sessions they organized for our students were extremely helpful.",
    rating: 5,
  },
  {
    name: "Patricia Brown",
    role: "Parent, Oakwood Academy",
    content: "My children have been wearing these uniforms for three years now. They wash beautifully and still look new. Worth every penny for the quality.",
    rating: 5,
  },
  {
    name: "Robert Garcia",
    role: "Bursar, Cambridge Prep",
    content: "The bulk ordering process was seamless, and their pricing was competitive. Our school has seen significant savings while improving uniform quality.",
    rating: 5,
  },
  {
    name: "Jennifer Adams",
    role: "Principal, Hillside Academy",
    content: "What sets them apart is their commitment to quality and their responsive customer service. Any issues are addressed promptly and professionally.",
    rating: 5,
  },
  {
    name: "David Lee",
    role: "Parent, Riverdale School",
    content: "The sizing guide was accurate, and the uniforms fit perfectly. My son loves how comfortable they are for all-day wear at school.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <Layout>
      <PageHeader
        title="Testimonials"
        subtitle="What our partners and parents say about our uniforms"
        breadcrumb="Success Stories"
      />

      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-16">
            <p className="text-gold font-medium mb-3">Client Feedback</p>
            <h2 className="heading-section mb-4">Trusted by Schools & Parents</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our partners and parents 
              have to say about their experience with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-elevated p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-serif font-semibold">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="heading-section mb-4">Our Track Record</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">100%</p>
              <p className="text-primary-foreground/80">Client Retention</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">4.9</p>
              <p className="text-primary-foreground/80">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">25+</p>
              <p className="text-primary-foreground/80">Happy Schools</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">50K+</p>
              <p className="text-primary-foreground/80">Students Served</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
