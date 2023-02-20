import { HeadContext } from '../models/head-interfaces';

const backgroundImage =
  'https://www.hollywoodreporter.com/wp-content/uploads/2018/05/edc9bf26-65c3-49c4-8822-97738260a449-1.png';
const headContext: HeadContext = {
  title: 'Rick and Morty GraphQL',
  meta: [
    {
      name: 'description',
      content:
        'Rick and Morty app created with nextjs graphql, apollo client and styled components',
    },
  ],
};

export { backgroundImage, headContext };
