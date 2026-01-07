import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Shirt, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-uniforms.jpg";
import productDress from "@/assets/product-dress-1.jpg";
import productTshirt from "@/assets/product-tshirt-1.jpg";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Crafted with the finest fabrics that withstand daily wear and frequent washing.",
  },
  {
    icon: Users,
    title: "25+ Partner Schools",
    description: "Trusted by leading educational institutions across the nation.",
  },
  {
    icon: Shirt,
    title: "Custom Designs",
    description: "Tailored uniforms that match your school's unique identity and colors.",
  },
  {
    icon: CheckCircle,
    title: "30 Years Experience",
    description: "Delivering excellence in school uniforms since 1995.",
  },
];

const productCategories = [
  {
    name: "Dress Collection",
    description: "Elegant formal dresses and pinafores for girls",
    image: productDress,
    link: "/products#dress",
  },
  {
    name: "T-Shirt Collection",
    description: "Comfortable polo shirts and casual wear",
    image: productTshirt,
    link: "/products#tshirt",
  },
];

const stats = [
  { number: "25+", label: "Partner Schools" },
  { number: "50,000+", label: "Students Served" },
  { number: "30", label: "Years Experience" },
  { number: "100%", label: "Satisfaction Rate" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative container-page py-20 text-primary-foreground">
          <div className="max-w-3xl">
            <p className="text-gold font-medium mb-4 animate-fade-in">
              Excellence in Every Stitch Since 1995
            </p>
            <h1 className="heading-display mb-6 animate-slide-up">
              Quality School Uniforms for{" "}
              <span className="text-gold">Tomorrow's Leaders</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
              We partner with schools to create custom, high-quality uniforms that inspire pride, 
              promote unity, and ensure comfort for students of all ages.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" className="bg-gold text-accent-foreground hover:bg-gold/90">
                <Link to="/products">View Our Products</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary py-12">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
                  {stat.number}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-16">
            <p className="text-gold font-medium mb-3">Why Choose Us</p>
            <h2 className="heading-section mb-4">Setting the Standard in School Uniforms</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              For over three decades, we've been the trusted partner for schools seeking quality, 
              durability, and style in their uniform programs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-elevated p-6 text-center hover:shadow-elevated transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="section-padding bg-secondary">
        <div className="container-page">
          <div className="text-center mb-16">
            <p className="text-gold font-medium mb-3">Our Collections</p>
            <h2 className="heading-section mb-4">Two Distinct Divisions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From formal dresses to comfortable everyday wear, we offer comprehensive uniform solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group card-elevated overflow-hidden hover:shadow-elevated transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-gold transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:text-gold transition-colors">
                    Explore Collection <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-page text-center">
          <h2 className="heading-section mb-4">Ready to Partner With Us?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join our growing family of partner schools and give your students uniforms they'll be proud to wear.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gold text-accent-foreground hover:bg-gold/90">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/clients">View Our Clients</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
