type Author = {
  name: string;
  email: string;
  age: number;
  readonly type: 'human' | 'ai';
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
    type: 'human',
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
  category: 'Technology',
};

let post2: Post = {
  title: 'This is a blog post',
  content: 'content of the post',
  date: new Date(),
  author: {
    name: 'John Doe',
    email: 'john@mail.com',
    age: 30,
    type: 'ai',
  },
  awards: {},
};
