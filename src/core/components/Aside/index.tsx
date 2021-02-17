import React, { useState } from 'react';

import logoImg from '../../assets/logo.svg'

import {
    MdDashboard, 
    MdArrowDownward, 
    MdArrowUpward, 
    MdExitToApp,
    MdClose,
    MdMenu,
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
} from './styles';

import {useAuth} from '../../hooks/auth'
import {useTheme} from '../../hooks/theme'
import Toggle from '../Toggle';

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

    return (
        <Container menuIsOpen={toggleMenuIsOpened}>
            <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                    {toggleMenuIsOpened ? <MdClose /> : <MdMenu />}
                </ToggleMenu>

                <LogoImg src={logoImg} alt="Logo do site Minha Carteira" />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/" >
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href="/list/inputs" >
                    <MdArrowUpward />
                    Entradas
                </MenuItemLink>
                <MenuItemLink href="/list/outputs" >
                    <MdArrowDownward />
                    Saídas
                </MenuItemLink>
                <MenuItemButton onClick={signOut} >
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