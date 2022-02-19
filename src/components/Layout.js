/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Header from './Header';
import Navigation from './Navigation';

const wrapperCss = css`
    dispaly: flex;
    top: 64px;
    position: relative;
    height: calc(100% - 64px);
    width: 100%;
    flex: auto;
    flex-direction: column;
`;

const Layout = ({ children }) => {
    return (
    <React.Fragment>
        <Header />
        <div css={wrapperCss}>
            <Navigation />
            <main>{children}</main>
        </div>
    </React.Fragment>
    );
};
export default Layout;
