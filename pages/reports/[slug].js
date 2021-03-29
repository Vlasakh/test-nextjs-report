import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import marked from 'marked';

import Layout from '../../components/Layout';

const Post = ({ htmlString, data = {} }) => (
  <>
    <Head>
      <title>{data.title}</title>
    </Head>
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    </Layout>
  </>
);

export const getStaticPaths = async () => {
  const files = fs.readdirSync('reports');
  // console.log('files: ', files);
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.html', ''),
    },
  }));
  // console.log('paths: ', paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const htmlString = fs.readFileSync(path.join('reports', slug + '.html')).toString();

  return {
    props: {
      htmlString,
      data: { title: slug },
    },
  };
};

export default Post;
