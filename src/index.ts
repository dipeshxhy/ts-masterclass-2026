type Author = {
  name: string;
  email: string;
  age: number;
};
type AwardDetails = {
  name: string;
  date: Date;
};
type Awards = {
  [key: string]: AwardDetails;
};
type Post = {
  title: string;
  content: string;
  date: Date;
  category?: string;
  author: Author;
  awards: Awards;
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
  awards: {
    web: {
      name: 'web award',
      date: new Date(),
    },
    web3: {
      name: 'web3 award',
      date: new Date(),
    },
  },
};
