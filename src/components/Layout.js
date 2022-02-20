/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Box from '@mui/material/Box';
import Header from './Header';
import Menus from './Menus';

const wrapperCss = css`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: calc(100vh - 64px);
    background-color: pink;
`;

const menuCss = css`
    flex-grow: 1;
    flex-shrink: 7;
    background-color: green;
`;

const contentCss = css`
    flex-grow: 7;
    flex-shrink: 1;
    overflow-y: scroll;
    background-color: skyblue;
`;

const Layout = ({ children }) => {
    return (
    <React.Fragment>
        <Header />
        <Box css={wrapperCss}>
            <Box css={menuCss}>
                <Menus />
            </Box>
            <Box css={contentCss}>
                <div>Test</div>
                {children}
            </Box>
        </Box>
    </React.Fragment>
    );
};
export default Layout;
