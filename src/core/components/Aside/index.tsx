import React, { useState } from 'react';

import logoImg from '../../assets/logo.svg'
import {useHistory} from 'react-router'

import {
    MdDashboard, 
    MdArrowDownward, 
    MdArrowUpward, 
    MdExitToApp,
    MdClose,
    MdMenu,
    MdAccountBalanceWallet
} from 'react-icons/md';

import { 
    Container, 
    Header, 
    LogoImg, 
    MenuContainer, 
    MenuItemLink, 
    Title,
    MenuItemButton,
    ToggleMenu,
    ThemeToggleFooter,
    MenuLinkChild,
} from './styles';

import {useAuth} from '../../hooks/auth'
import {useTheme} from '../../hooks/theme'
import Toggle from '../Toggle';
import { useLocation } from 'react-router-dom';

const Aside: React.FC = () => {
    const {signOut} = useAuth();
    const {toggleTheme, theme} = useTheme();

    const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);



    const handleToggleMenu = () => {
        setToggleMenuIsOpened(!toggleMenuIsOpened);
    }
    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    const {pathname} = useLocation();
    const history = useHistory();
    
    function handleSignOut() {
        history.push('/');
        signOut();
    }

    return (
        <Container menuIsOpen={toggleMenuIsOpened}>
            <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                    {toggleMenuIsOpened ? <MdClose /> : <MdMenu />}
                </ToggleMenu>

                <LogoImg src={logoImg} alt="Logo do site Save Money" />
                <Title>Save Money</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink to="/" >
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>
                <MenuItemLink to="/newTransaction" >
                    <MdAccountBalanceWallet />
                    Nova Transação
                </MenuItemLink>
                
                <MenuItemLink to="/list/inputs" >
                    <MdArrowUpward />
                    Entradas
                </MenuItemLink>
                <MenuItemLink to="/list/outputs" >
                    <MdArrowDownward />
                    Saídas
                </MenuItemLink>
                <MenuItemLink to="/metas" >
                    <MdAccountBalanceWallet />
                    Metas
                </MenuItemLink>
                {
                    pathname.includes('metas') && (
                        <MenuItemLink to="/metas/list" >
                            <MenuLinkChild>
                                Consultar metas
                            </MenuLinkChild>
                        </MenuItemLink>
                    )
                }
                
                <MenuItemLink to="/dependents" >
                    <MdDashboard />
                    Dependentes
                </MenuItemLink>
                {
                    pathname.includes('dependents') && (
                        <MenuItemLink to="/dependents/list" >
                            <MenuLinkChild>
                                Consultar dependentes
                            </MenuLinkChild>
                        </MenuItemLink>
                    )
                }

                <MenuItemButton onClick={handleSignOut} >
                    <MdExitToApp />
                    Sair
                </MenuItemButton>
            </MenuContainer>

            <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
                <Toggle 
                    labelLeft="Light"
                    labelRight="Dark"
                    checked={darkTheme}
                    onChange={handleChangeTheme}
                />
            </ThemeToggleFooter>
        </Container>
    )
}

export default Aside;