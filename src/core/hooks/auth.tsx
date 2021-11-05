import React, {createContext, useState, useContext} from 'react';

interface IAuthContext {
    logged: boolean;
    signIn(email: string, password: string): void;
    signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({children}) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@minha-carteira:logged');

        return !!isLogged;
    });

    const signIn = (email:string, password:string) => {
        const userData = localStorage.getItem('@saveMoney-conta');
        if(userData) {
            const userDataParsed = JSON.parse(userData);
            if(email === userDataParsed.email && password === userDataParsed.password){
                localStorage.setItem('@minha-carteira:logged', 'true');
                setLogged(true);
            } else {
                alert('Usuário ou senha inválidos');
            }
        }
        
    }

    const signOut = () => {
        localStorage.removeItem('@minha-carteira:logged');
        setLogged(false);
    }

    return (
        <AuthContext.Provider value={{logged, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);

    return context;
}

export {AuthProvider, useAuth};

