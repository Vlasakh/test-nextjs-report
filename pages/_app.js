import React from 'react';
import fs from 'fs';

import AppPropsContext from '../components/AppPropsContext';

import App from 'next/app';

import '../styles/index.css';

export default function MyApp({ Component, appProps, pageProps }) {
  return (
    <AppPropsContext.Provider value={appProps}>
      <Component {...pageProps} />
    </AppPropsContext.Provider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const files = fs.readdirSync('reports');
  const slugs = files.map((filename) => filename.replace('.html', ''));
  const {
    router: {
      query: { slug },
    },
  } = appContext;
  const appProps = await App.getInitialProps(appContext);

  return {
    slugs,
    appProps: { slugs, slug, ...appProps },
    pageProps: {
      // report: getReport(slug)
    },
  };
};

// App.getInitialProps = async () => {
//   return { initialProps: [] };
// };

// export const getReport = async (slug) => {
//   const markdownWithMetadata = fs.readFileSync(path.join('reports', slug + '.md')).toString();
//
//   const parsedMarkdown = matter(markdownWithMetadata);
//
//   const htmlString = marked(parsedMarkdown.content);
//
//   return {
//     htmlString,
//     data: parsedMarkdown.data,
//   };
// };
