import { useLocation, useNavigate, Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Calendar, User, ArrowLeft, Share2, Twitter, Facebook, Linkedin, Link as LinkIcon, Check } from "lucide-react";
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
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [post, setPost] = useState<Post | null>(location.state as Post || null);
    const [loading, setLoading] = useState(!post);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!post && id) {
            const fetchPost = async () => {
                setLoading(true);
                try {
                    const response = await fetch('https://api.joinonemai.com/api/app/fetch-posts');
                    if (!response.ok) {
                        throw new Error('Failed to fetch posts');
                    }
                    const data = await response.json();
                    const foundPost = (data.data || []).find((p: Post) => p._id === id);
                    if (foundPost) {
                        setPost(foundPost);
                    } else {
                        setError('Post not found');
                    }
                } catch (err) {
                    setError(err instanceof Error ? err.message : 'An error occurred');
                } finally {
                    setLoading(false);
                }
            };

            fetchPost();
        }
    }, [id, post]);

    if (loading) {
        return (
            <div className="min-h-screen py-20 flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="min-h-screen py-20 flex flex-col justify-center items-center">
                <h1 className="text-2xl font-normal mb-4">{error || "Post not found"}</h1>
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
                    <h1 className="text-3xl md:text-5xl font-normal mb-6">
                        {post.title}
                    </h1>

                    <div className="flex items-center space-x-6 text-muted-foreground mb-8">
                        <div className="flex items-center space-x-2">
                            <User className="h-5 w-5" />
                            <span>OneMAITeam</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Calendar className="h-5 w-5" />
                            <span>{formatDate(post.createdAt)}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 py-6 border-y border-border mb-8">
                        <span className="text-sm font-medium text-muted-foreground mr-2 flex items-center gap-2">
                            <Share2 className="w-4 h-4" /> Share this post:
                        </span>
                        <div className="flex items-center gap-2">
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full h-10 w-10 hover:bg-[#1DA1F2] hover:text-white transition-colors"
                                onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`, '_blank')}
                                title="Share on Twitter"
                            >
                                <Twitter className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full h-10 w-10 hover:bg-[#4267B2] hover:text-white transition-colors"
                                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                                title="Share on Facebook"
                            >
                                <Facebook className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full h-10 w-10 hover:bg-[#0077b5] hover:text-white transition-colors"
                                onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                                title="Share on LinkedIn"
                            >
                                <Linkedin className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full h-10 w-10 hover:bg-[#25D366] hover:text-white transition-colors"
                                onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`, '_blank')}
                                title="Share on WhatsApp"
                            >
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full h-10 w-10 hover:bg-gray-100 transition-colors"
                                onClick={() => {
                                    navigator.clipboard.writeText(window.location.href);
                                    toast.success("Link copied to clipboard!");
                                }}
                                title="Copy Link"
                            >
                                <LinkIcon className="h-4 w-4" />
                            </Button>
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
                            h1: ({ node, ...props }) => <h1 className="text-3xl font-normal mb-6 mt-8" {...props} />,
                            h2: ({ node, ...props }) => <h2 className="text-2xl font-normal mb-4 mt-8" {...props} />,
                            p: ({ node, ...props }) => <p className="mb-6 leading-relaxed whitespace-pre-wrap" {...props} />,
                            blockquote: ({ node, ...props }) => (
                                <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-6 italic bg-muted/30 rounded-r-lg" {...props} />
                            ),
                            ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />,
                            ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-6 space-y-2" {...props} />,
                            li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                            a: ({ node, ...props }) => <a className="text-blue-500 hover:text-blue-600 underline transition-colors" target="_blank" rel="noopener noreferrer" {...props} />,
                            strong: ({ node, ...props }) => <strong className="font-semibold text-foreground" {...props} />,
                            em: ({ node, ...props }) => <em className="italic" {...props} />,
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>

                {/* Bottom Share Section */}
                <div className="mt-16 pt-8 border-t border-border">
                    <h3 className="text-xl font-normal mb-6">Found this helpful? Share it with your community</h3>
                    <div className="flex flex-wrap gap-4">
                        <Button
                            variant="outline"
                            className="rounded-full px-6 flex items-center gap-2 hover:bg-[#1DA1F2] hover:text-white transition-colors"
                            onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`, '_blank')}
                        >
                            <Twitter className="h-4 w-4" /> Twitter
                        </Button>
                        <Button
                            variant="outline"
                            className="rounded-full px-6 flex items-center gap-2 hover:bg-[#4267B2] hover:text-white transition-colors"
                            onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                        >
                            <Facebook className="h-4 w-4" /> Facebook
                        </Button>
                        <Button
                            variant="outline"
                            className="rounded-full px-6 flex items-center gap-2 hover:bg-[#0077b5] hover:text-white transition-colors"
                            onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                        >
                            <Linkedin className="h-4 w-4" /> LinkedIn
                        </Button>
                        <Button
                            variant="outline"
                            className="rounded-full px-6 flex items-center gap-2 hover:bg-[#25D366] hover:text-white transition-colors"
                            onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`, '_blank')}
                        >
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg> WhatsApp
                        </Button>
                        <Button
                            variant="outline"
                            className="rounded-full px-6 flex items-center gap-2 hover:bg-gray-100 transition-colors"
                            onClick={() => {
                                navigator.clipboard.writeText(window.location.href);
                                toast.success("Link copied to clipboard!");
                            }}
                        >
                            <LinkIcon className="h-4 w-4" /> Copy Link
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
