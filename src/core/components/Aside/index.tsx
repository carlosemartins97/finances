import React from 'react';

import logoImg from '../../assets/logo.svg'

import {
    MdDashboard, 
    MdArrowDownward, 
    MdArrowUpward, 
    MdExitToApp
} from 'react-icons/md';

import { 
    Container, 
    Header, 
    LogoImg, 
    MenuContainer, 
    MenuItemLink, 
    Title,
    MenuItemButton,
} from './styles';

import {useAuth} from '../../hooks/auth'

const Aside: React.FC = () => {
    const {signOut} = useAuth();
    return (
        <Container>
            <Header>
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
        </Container>
    )
}

export default Aside;