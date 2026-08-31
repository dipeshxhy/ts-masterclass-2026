type Post = {
  title: string;
  content: string;
  date: Date;
  category?: string;
};
let post: Post = {
  title: 'This is a blog post',
  content: 'content of the post',
  date: new Date(),
};
let post2: Post = {
  title: 'This is a blog post',
  content: 'content of the post',
  date: new Date(),
  category: 'AI',
};
