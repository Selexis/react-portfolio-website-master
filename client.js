import { GraphQLClient } from 'graphql-request';

export const graphcms = new GraphQLClient(
  // process.env.NEXT_PUBLIC_GRAPHCMS_URL,
  // {
  //   headers: {},
  // }

  'https://eu-west-2.cdn.hygraph.com/content/cm27nou5m082a07w72iiqxs08/master',
  {
    headers: {},
  }
);
