import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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

                <div className="rounded-2xl overflow-hidden mb-12 shadow-elegant aspect-video">
                    <img
                        src={getImageUrl(post.image)}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mb-6 mt-8" {...props} />,
                            h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mb-4 mt-8" {...props} />,
                            p: ({ node, ...props }) => <p className="mb-6 leading-relaxed whitespace-pre-wrap" {...props} />,
                            blockquote: ({ node, ...props }) => (
                                <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-6 italic bg-muted/30 rounded-r-lg" {...props} />
                            ),
                            ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />,
                            ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-6 space-y-2" {...props} />,
                            li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                            a: ({ node, ...props }) => <a className="text-blue-500 hover:text-blue-600 underline transition-colors" target="_blank" rel="noopener noreferrer" {...props} />,
                            strong: ({ node, ...props }) => <strong className="font-bold text-foreground" {...props} />,
                            em: ({ node, ...props }) => <em className="italic" {...props} />,
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
