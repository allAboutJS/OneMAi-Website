import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      description: "A modern e-commerce platform with advanced filtering, secure payments, and inventory management.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      featured: true
    },
    {
      title: "Healthcare App",
      category: "Mobile Development", 
      description: "Mobile application for healthcare providers with patient management and appointment scheduling.",
      technologies: ["React Native", "Firebase", "TypeScript"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      featured: true
    },
    {
      title: "SaaS Dashboard",
      category: "Web Development",
      description: "Analytics dashboard for SaaS companies with real-time data visualization and reporting.",
      technologies: ["Vue.js", "D3.js", "Python", "MongoDB"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      featured: false
    },
    {
      title: "Restaurant Website",
      category: "Web Design",
      description: "Beautiful restaurant website with online ordering system and table reservation functionality.",
      technologies: ["WordPress", "PHP", "MySQL", "JavaScript"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      featured: false
    },
    {
      title: "Fitness Tracker",
      category: "Mobile Development",
      description: "Comprehensive fitness tracking app with workout plans, nutrition tracking, and social features.",
      technologies: ["Flutter", "Dart", "Cloud Firestore"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      featured: false
    },
    {
      title: "Corporate Website",
      category: "Web Development",
      description: "Professional corporate website with multi-language support and content management system.",
      technologies: ["Next.js", "Sanity CMS", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b81d?w=600&h=400&fit=crop",
      featured: false
    }
  ];

  const categories = ["All", "Web Development", "Mobile Development", "Web Design"];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses 
            transform their digital presence with innovative solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={category === "All" ? "bg-gradient-primary border-0" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-primary border-0">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">All Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(project => !project.featured).map((project, index) => (
              <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-primary border-0">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="mr-2 h-3 w-3" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "100+", label: "Happy Clients" },
              { number: "50+", label: "Technologies Used" },
              { number: "99%", label: "Success Rate" }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-background rounded-2xl p-8 md:p-12 shadow-elegant">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us to discuss your project requirements.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary border-0 shadow-elegant hover:shadow-glow transition-all duration-300"
            asChild
          >
            <Link to="/contact">
              Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;