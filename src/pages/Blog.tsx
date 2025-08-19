import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const featuredPost = {
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps and beyond.",
    author: "Alex Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop"
  };

  const posts = [
    {
      title: "10 Essential UI/UX Design Principles for Better User Experience",
      excerpt: "Learn the fundamental design principles that can transform your website's user experience and boost conversions.",
      author: "Sarah Miller",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop"
    },
    {
      title: "Mobile-First Design: Why It Matters More Than Ever",
      excerpt: "Discover why mobile-first design is crucial for modern websites and how to implement it effectively.",
      author: "Mike Chen",
      date: "March 10, 2024", 
      readTime: "5 min read",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop"
    },
    {
      title: "SEO Best Practices for Modern Websites",
      excerpt: "A comprehensive guide to optimizing your website for search engines in 2024.",
      author: "Emily Davis",
      date: "March 8, 2024",
      readTime: "7 min read", 
      category: "SEO",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop"
    },
    {
      title: "Building Scalable React Applications: Best Practices",
      excerpt: "Learn how to structure your React applications for maintainability and scalability.",
      author: "Alex Johnson",
      date: "March 5, 2024",
      readTime: "9 min read",
      category: "Development",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop"
    },
    {
      title: "The Complete Guide to Website Performance Optimization",
      excerpt: "Boost your website's speed and performance with these proven optimization techniques.",
      author: "Mike Chen",
      date: "March 3, 2024",
      readTime: "8 min read",
      category: "Performance",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      title: "Understanding Modern CSS: Grid vs Flexbox",
      excerpt: "Master the differences between CSS Grid and Flexbox and when to use each layout system.",
      author: "Sarah Miller", 
      date: "March 1, 2024",
      readTime: "6 min read",
      category: "CSS",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    }
  ];

  const categories = ["All", "Web Development", "Design", "Mobile", "SEO", "Performance"];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and insights from the world 
            of web development, design, and digital marketing.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-primary border-0">
                    Featured
                  </Badge>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4">
                  {featuredPost.category}
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center space-x-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <Button className="bg-gradient-primary border-0 w-fit">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Category Filter */}
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

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {posts.map((post, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">
                    {post.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <h3 className="text-lg font-semibold line-clamp-2">
                  {post.title}
                </h3>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <Button variant="ghost" size="sm">
                    Read More <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest articles, tips, and insights 
            delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-input bg-background"
            />
            <Button className="bg-gradient-primary border-0 px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;