import React from 'react';

const ContextPrueba = React.createContext();

const ContextPruebaProvider = ( { children } )=> {

    const [name, setName] = React.useState('sin nombre');


    return(
        <ContextPrueba.Provider
            value={{
                name, setName
            }}
        >
            {children}
        </ContextPrueba.Provider>
    )
}



export { ContextPrueba, ContextPruebaProvider }