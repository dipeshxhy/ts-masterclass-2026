type Author = {
  name: string;
  email: string;
  age: number;
};
type Post = {
  title: string;
  content: string;
  date: Date;
  category?: string;
  author: Author;
};
let post: Post = {
  title: 'This is a blog post',
  content: 'content of the post',
  date: new Date(),
  author: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
  },
};
