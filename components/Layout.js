import React from 'react';
import Head from 'next/head';

import Sidebar from './Sidebar';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Attribution report</title>
    </Head>
    <div className={'site'}>
      <Sidebar />
      <main>
        <h2 className={'header'}>Report</h2>
        {children}
      </main>
    </div>
  </>
);

export default Layout;
