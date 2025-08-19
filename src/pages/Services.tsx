import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Search, 
  Palette, 
  Code,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites built with modern technologies for optimal performance and user experience.",
      features: ["Responsive Design", "Performance Optimization", "SEO Ready", "Cross-browser Compatible"],
      price: "Starting at $2,500"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that engage users and drive business growth.",
      features: ["iOS & Android", "React Native", "Push Notifications", "App Store Optimization"],
      price: "Starting at $5,000"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online store development with secure payment processing and inventory management.",
      features: ["Payment Integration", "Inventory Management", "Order Tracking", "Analytics Dashboard"],
      price: "Starting at $3,500"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your online visibility with comprehensive search engine optimization strategies.",
      features: ["Keyword Research", "On-page SEO", "Technical SEO", "Performance Monitoring"],
      price: "Starting at $1,200/month"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that create memorable user experiences and drive conversions.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "Starting at $1,800"
    },
    {
      icon: Code,
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to keep your website secure, updated, and performing optimally.",
      features: ["Security Updates", "Bug Fixes", "Performance Monitoring", "24/7 Support"],
      price: "Starting at $500/month"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We start by understanding your business goals, target audience, and project requirements."
    },
    {
      step: "02", 
      title: "Planning",
      description: "We create a detailed project plan with timelines, milestones, and clear deliverables."
    },
    {
      step: "03",
      title: "Design",
      description: "Our designers create beautiful mockups and prototypes for your approval."
    },
    {
      step: "04",
      title: "Development",
      description: "Our developers bring the designs to life with clean, efficient, and scalable code."
    },
    {
      step: "05",
      title: "Testing",
      description: "Rigorous testing ensures everything works perfectly across all devices and browsers."
    },
    {
      step: "06",
      title: "Launch",
      description: "We deploy your project and provide ongoing support to ensure continued success."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to launch, we provide comprehensive digital solutions 
            that help your business succeed in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t">
                    <Badge variant="secondary" className="mb-4">
                      {service.price}
                    </Badge>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/contact">
                        Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to ensure every project is delivered on time, 
              within budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="border-0 shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary-foreground font-bold">{step.step}</span>
                    </div>
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-secondary rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss your requirements and create a custom solution that perfectly fits your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary border-0 shadow-elegant hover:shadow-glow transition-all duration-300"
              asChild
            >
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;