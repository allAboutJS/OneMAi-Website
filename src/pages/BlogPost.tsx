import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft } from "lucide-react";

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

const BlogPost = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const post = location.state as Post;

    if (!post) {
        return (
            <div className="min-h-screen py-20 flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold mb-4">Post not found</h1>
                <Button onClick={() => navigate('/blog')}>Back to Blog</Button>
            </div>
        );
    }

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

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link to="/blog">
                    <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                    </Button>
                </Link>

                <div className="mb-8">
                    <Badge className="bg-gradient-primary border-0 mb-4">
                        Blog
                    </Badge>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">
                        {post.title}
                    </h1>

                    <div className="flex items-center space-x-6 text-muted-foreground mb-8">
                        <div className="flex items-center space-x-2">
                            <User className="h-5 w-5" />
                            <span>One Mai Team</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Calendar className="h-5 w-5" />
                            <span>{formatDate(post.createdAt)}</span>
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl overflow-hidden mb-12 shadow-elegant">
                    <img
                        src={getImageUrl(post.image)}
                        alt={post.title}
                        className="w-full h-[400px] object-cover"
                    />
                </div>

                <div
                    className="prose prose-lg dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>
        </div>
    );
};

export default BlogPost;
