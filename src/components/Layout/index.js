import React, { Fragment } from 'react';

const Layout = ({children}) => {
  return (
    <Fragment>
        <div style={{marginTop: '3rem'}}>
            <main>{children}</main>
        </div>

    </Fragment>
  );
};

export default Layout;
