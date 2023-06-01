import Post from "./Post";

type ChildPost = Post & { status: 'current' | 'upcoming' | 'complete' };

export default ChildPost;