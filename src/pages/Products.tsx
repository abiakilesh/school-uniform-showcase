import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import productDress from "@/assets/product-dress-1.jpg";
import productTshirt from "@/assets/product-tshirt-1.jpg";

const dressProducts = [
  {
    name: "Classic Pinafore Dress",
    description: "Traditional navy blue pinafore with pleated skirt, perfect for formal school occasions.",
    sizes: "Ages 4-16",
    image: productDress,
  },
  {
    name: "Summer Dress",
    description: "Lightweight cotton blend dress ideal for warmer months with breathable fabric.",
    sizes: "Ages 4-16",
    image: productDress,
  },
  {
    name: "Formal Blazer Dress",
    description: "Elegant combination of blazer and dress for special events and ceremonies.",
    sizes: "Ages 8-18",
    image: productDress,
  },
  {
    name: "Winter Tunic",
    description: "Warm wool-blend tunic designed for colder seasons with comfort fit.",
    sizes: "Ages 4-16",
    image: productDress,
  },
];

const tshirtProducts = [
  {
    name: "Classic Polo Shirt",
    description: "Premium cotton polo with embroidered school crest, available in multiple colors.",
    sizes: "Ages 4-18",
    image: productTshirt,
  },
  {
    name: "Sports Polo",
    description: "Moisture-wicking fabric designed for physical education and sports activities.",
    sizes: "Ages 4-18",
    image: productTshirt,
  },
  {
    name: "Long Sleeve Polo",
    description: "Full-length sleeves for cooler weather while maintaining the classic polo style.",
    sizes: "Ages 4-18",
    image: productTshirt,
  },
  {
    name: "PE T-Shirt",
    description: "Lightweight, quick-dry t-shirt perfect for sports and physical activities.",
    sizes: "Ages 4-18",
    image: productTshirt,
  },
];

const Products = () => {
  return (
    <Layout>
      <PageHeader
        title="Our Products"
        subtitle="Quality uniforms designed for comfort, durability, and style"
        breadcrumb="Product Catalog"
      />

      {/* Dress Collection */}
      <section id="dress" className="section-padding">
        <div className="container-page">
          <div className="mb-12">
            <p className="text-gold font-medium mb-3">Division One</p>
            <h2 className="heading-section mb-4">Dress Collection</h2>
            <p className="text-muted-foreground max-w-2xl">
              Our dress collection features elegant designs suitable for everyday school wear 
              and formal occasions. Each piece is crafted with attention to detail and comfort.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dressProducts.map((product, index) => (
              <div key={index} className="card-elevated overflow-hidden group">
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{product.description}</p>
                  <p className="text-xs font-medium text-gold">{product.sizes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-page">
        <div className="border-t border-border" />
      </div>

      {/* T-Shirt Collection */}
      <section id="tshirt" className="section-padding">
        <div className="container-page">
          <div className="mb-12">
            <p className="text-gold font-medium mb-3">Division Two</p>
            <h2 className="heading-section mb-4">T-Shirt Collection</h2>
            <p className="text-muted-foreground max-w-2xl">
              Our t-shirt collection offers versatile options for everyday wear and sports activities. 
              Made from premium fabrics that ensure comfort throughout the school day.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tshirtProducts.map((product, index) => (
              <div key={index} className="card-elevated overflow-hidden group">
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{product.description}</p>
                  <p className="text-xs font-medium text-gold">{product.sizes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-secondary">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-section mb-4">Custom Orders Welcome</h2>
            <p className="text-muted-foreground mb-6">
              All our products can be customized with your school's colors, crest, and specific 
              design requirements. Contact us to discuss your school's unique uniform needs.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gold" />
                <span>Custom Colors Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gold" />
                <span>School Crest Embroidery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gold" />
                <span>Bulk Order Discounts</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
