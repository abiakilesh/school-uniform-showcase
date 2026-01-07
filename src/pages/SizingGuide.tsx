import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";

const sizingData = {
  girls: [
    { age: "4-5", chest: "22-23", waist: "21-22", height: "104-110" },
    { age: "6-7", chest: "24-25", waist: "22-23", height: "116-122" },
    { age: "8-9", chest: "26-27", waist: "23-24", height: "128-134" },
    { age: "10-11", chest: "28-30", waist: "24-26", height: "140-146" },
    { age: "12-13", chest: "31-33", waist: "26-28", height: "152-158" },
    { age: "14-15", chest: "34-36", waist: "28-30", height: "164-170" },
    { age: "16+", chest: "37-39", waist: "30-32", height: "170+" },
  ],
  boys: [
    { age: "4-5", chest: "22-23", waist: "21-22", height: "104-110" },
    { age: "6-7", chest: "24-25", waist: "22-23", height: "116-122" },
    { age: "8-9", chest: "27-28", waist: "24-25", height: "128-134" },
    { age: "10-11", chest: "29-31", waist: "25-27", height: "140-146" },
    { age: "12-13", chest: "32-34", waist: "27-29", height: "152-158" },
    { age: "14-15", chest: "35-37", waist: "29-31", height: "164-170" },
    { age: "16+", chest: "38-41", waist: "31-34", height: "170+" },
  ],
};

const measurementTips = [
  {
    title: "Chest",
    description: "Measure around the fullest part of the chest, keeping the tape horizontal.",
  },
  {
    title: "Waist",
    description: "Measure around the natural waistline, keeping the tape comfortably loose.",
  },
  {
    title: "Height",
    description: "Measure from head to toe while standing straight against a wall.",
  },
  {
    title: "Arm Length",
    description: "Measure from the shoulder point to the wrist bone with arm slightly bent.",
  },
];

const SizingGuide = () => {
  return (
    <Layout>
      <PageHeader
        title="Sizing Guide"
        subtitle="Find the perfect fit for your student's uniform"
        breadcrumb="Sizing Help"
      />

      {/* How to Measure */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-12">
            <p className="text-gold font-medium mb-3">Getting Started</p>
            <h2 className="heading-section mb-4">How to Measure</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              For the most accurate fit, take measurements while the student is wearing 
              light clothing. All measurements are in centimeters (cm).
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {measurementTips.map((tip, index) => (
              <div key={index} className="card-elevated p-6">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <span className="font-serif font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">{tip.title}</h3>
                <p className="text-muted-foreground text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size Charts */}
      <section className="section-padding bg-secondary">
        <div className="container-page">
          {/* Girls Sizing */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl font-semibold mb-6">Girls' Sizing Chart</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-card rounded-xl overflow-hidden">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="px-6 py-4 text-left font-medium">Age (Years)</th>
                    <th className="px-6 py-4 text-left font-medium">Chest (cm)</th>
                    <th className="px-6 py-4 text-left font-medium">Waist (cm)</th>
                    <th className="px-6 py-4 text-left font-medium">Height (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  {sizingData.girls.map((row, index) => (
                    <tr key={index} className="border-b border-border last:border-0">
                      <td className="px-6 py-4 font-medium">{row.age}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.chest}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.waist}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.height}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Boys Sizing */}
          <div>
            <h2 className="font-serif text-2xl font-semibold mb-6">Boys' Sizing Chart</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-card rounded-xl overflow-hidden">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="px-6 py-4 text-left font-medium">Age (Years)</th>
                    <th className="px-6 py-4 text-left font-medium">Chest (cm)</th>
                    <th className="px-6 py-4 text-left font-medium">Waist (cm)</th>
                    <th className="px-6 py-4 text-left font-medium">Height (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  {sizingData.boys.map((row, index) => (
                    <tr key={index} className="border-b border-border last:border-0">
                      <td className="px-6 py-4 font-medium">{row.age}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.chest}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.waist}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.height}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-section mb-6 text-center">Fitting Tips</h2>
            <div className="space-y-4">
              <div className="card-elevated p-6">
                <h3 className="font-semibold mb-2">Allow Room for Growth</h3>
                <p className="text-muted-foreground text-sm">
                  We recommend ordering one size up to allow for growth throughout the school year, 
                  especially for younger students.
                </p>
              </div>
              <div className="card-elevated p-6">
                <h3 className="font-semibold mb-2">Between Sizes?</h3>
                <p className="text-muted-foreground text-sm">
                  If your child's measurements fall between two sizes, we recommend choosing the 
                  larger size for comfort and longevity.
                </p>
              </div>
              <div className="card-elevated p-6">
                <h3 className="font-semibold mb-2">Need Custom Sizing?</h3>
                <p className="text-muted-foreground text-sm">
                  We offer custom sizing for students who need special accommodations. 
                  Contact us at 123456789 or info@gmail.com for assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SizingGuide;
