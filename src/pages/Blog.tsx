import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Post {
  _id: string;
  image: string;
  title: string;
  content: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://api.joinonemai.com/api/app/fetch-posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data.posts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getImageUrl = (path: string) => {
    if (path.startsWith('http')) return path;
    return `https://api.joinonemai.com/${path}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen py-20 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen py-20 flex justify-center items-center text-red-500">
        Error: {error}
      </div>
    );
  }

  const featuredPost = posts.length > 0 ? posts[0] : null;
  const remainingPosts = posts.length > 1 ? posts.slice(1) : [];

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
        {featuredPost && (
          <div className="mb-16">
            <Card className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={getImageUrl(featuredPost.image)}
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
                    Blog
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {featuredPost.title}
                  </h2>
                  <div
                    className="text-muted-foreground mb-6 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: featuredPost.content }}
                  />

                  <div className="flex items-center space-x-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>One Mai Team</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(featuredPost.createdAt)}</span>
                    </div>
                  </div>

                  <Link to={`/blog/${featuredPost._id}`} state={featuredPost}>
                    <Button className="bg-gradient-primary border-0 w-fit">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
        )}

        {/* Blog Posts Grid */}
        {remainingPosts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {remainingPosts.map((post) => (
              <Card key={post._id} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={getImageUrl(post.image)}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">
                      Blog
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <h3 className="text-lg font-semibold line-clamp-2">
                    {post.title}
                  </h3>
                </CardHeader>

                <CardContent className="pt-0">
                  <div
                    className="text-muted-foreground text-sm mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>One Mai Team</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(post.createdAt)}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link to={`/blog/${post._id}`} state={post}>
                      <Button variant="ghost" size="sm">
                        Read More <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

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