import React, { useContext } from 'react';

import Link from 'next/link';

import AppPropsContext from './AppPropsContext';

const Sidebar = () => {
  const { slugs = [], slug } = useContext(AppPropsContext);

  return (
    <aside>
      <h2 className={'header'}>Menu</h2>

      {slugs.map((path) => {
        return (
          <div key={path}>
            <Link href={'/reports/' + path}>{<a className={slug === path ? 'selected' : ''}>{path}</a>}</Link>
          </div>
        );
      })}
    </aside>
  );
};

export default Sidebar;
