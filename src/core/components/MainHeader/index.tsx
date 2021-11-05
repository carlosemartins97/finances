import React, {useMemo, useState} from 'react';
import Toggle from '../Toggle'

import emojis from '../../utils/emojis'

import { useTheme } from '../../hooks/theme'

import { Container, Profile, Welcome, Username } from './styles';


const MainHeader: React.FC = () => {
    const {toggleTheme, theme} = useTheme();

    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);
    const [name, setName] = useState(() => {
        const userData = localStorage.getItem('@saveMoney-conta');
        if(userData) {
            return JSON.parse(userData).name;
        } else {
            setName('');
        }
    });

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    },[])

    return (
        <Container>
            <Toggle 
                labelLeft="Light"
                labelRight="Dark"
                checked={darkTheme}
                onChange={handleChangeTheme}
            />
            <Profile>
                <Welcome>
                    Olá , {emoji}
                </Welcome>
                <Username>
                    {name}
                </Username>
            </Profile>
        </Container>
    )
}

export default MainHeader;