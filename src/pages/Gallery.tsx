import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import productDress from "@/assets/product-dress-1.jpg";
import productTshirt from "@/assets/product-tshirt-1.jpg";
import heroImage from "@/assets/hero-uniforms.jpg";

const galleryImages = [
  {
    src: heroImage,
    title: "Premium Uniform Display",
    category: "Showroom",
  },
  {
    src: productDress,
    title: "Girls' Dress Collection",
    category: "Products",
  },
  {
    src: productTshirt,
    title: "Classic Polo Shirts",
    category: "Products",
  },
  {
    src: heroImage,
    title: "School Partnership Event",
    category: "Events",
  },
  {
    src: productDress,
    title: "Formal Wear Range",
    category: "Products",
  },
  {
    src: productTshirt,
    title: "Sports Collection",
    category: "Products",
  },
  {
    src: heroImage,
    title: "Manufacturing Facility",
    category: "Behind the Scenes",
  },
  {
    src: productDress,
    title: "Quality Inspection",
    category: "Behind the Scenes",
  },
  {
    src: productTshirt,
    title: "New Season Arrivals",
    category: "Products",
  },
];

const Gallery = () => {
  return (
    <Layout>
      <PageHeader
        title="Gallery"
        subtitle="A visual showcase of our products and craftsmanship"
        breadcrumb="Photo Gallery"
      />

      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-12">
            <p className="text-gold font-medium mb-3">Visual Showcase</p>
            <h2 className="heading-section mb-4">Our Work in Pictures</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through our gallery to see the quality and variety of uniforms we create 
              for schools across the nation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group card-elevated overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-medium text-gold mb-1">{image.category}</p>
                  <h3 className="font-serif font-semibold">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video/Feature Section */}
      <section className="section-padding bg-secondary">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-medium mb-3">Behind the Scenes</p>
              <h2 className="heading-section mb-6">Craftsmanship in Action</h2>
              <p className="text-muted-foreground mb-4">
                Every uniform we create goes through a meticulous process of design, 
                cutting, stitching, and quality control. Our skilled craftsmen take 
                pride in their work, ensuring every seam is perfect.
              </p>
              <p className="text-muted-foreground">
                From selecting the finest fabrics to the final quality inspection, 
                we maintain the highest standards at every step of the manufacturing process.
              </p>
            </div>
            <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-primary ml-1" />
                </div>
                <p className="text-muted-foreground">Manufacturing Process Video</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
