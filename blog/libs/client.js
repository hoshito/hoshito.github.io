import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'nth-tech-blog',
  apiKey: process.env.API_KEY,
});

