/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import { AiOutlineBars } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MenuContent from './MenuContent';
import menuData from './menuData';
import SubMenu from './SubMenu';

const NavIcon = styled(Link)`
    font-size: 2rem;
    height: 50px;
    display: flex;
    align-items: center;
    margin-left: 20px;
`;

const SidebarNav = styled.nav`
    background-color: black;
    width: 300px;
    height: 100%;
    position: fixed;
    overflow-y: scroll;
    scroll-behavior: smooth;
    -webkit-scroll-behavior: smooth;
    box-shadow: 0 13px 35px -12px rgba(35, 35, 35, 0.15);
    top: 0;
    right: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 99999;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

const MobileMenu = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <>
                <NavIcon className="d-lg-none" to="#" style={{ justifyContent: 'flex-end' }}>
                    <AiOutlineBars onClick={showSidebar} />
                </NavIcon>

                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to="#">
                            <AiIcons.AiOutlineClose
                                style={{
                                    color: 'white',
                                    fontSize: '18px',
                                    justifyContent: 'flex-start',
                                }}
                                onClick={showSidebar}
                            />
                        </NavIcon>
                        {menuData.map((item, index) => (
                            <SubMenu item={item} key={index} />
                        ))}
                        <MenuContent />
                    </SidebarWrap>
                </SidebarNav>
            </>
        </>
    );
};

export default MobileMenu;
