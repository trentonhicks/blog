type Post = {
    _path: string,
    id: number,
    title: string,
    description: string,
    date: string,
    datetime: string,
    author: {
      name: string,
      role: string,
      href: string,
      imageUrl: string,
    }
};

export default Post;