import { createContext, ReactNode, useState } from "react";

interface SearchCep {
    id: number,
    date: Date,
    cep: string,
}

interface SearchCepsInterface {
    ceps: SearchCep[],
}

interface SearchCepsType {
    SearchCeps: SearchCepsInterface,
    createNewSearchCep: (cep:string) => void
}

export const SearchCepsContext = createContext({} as SearchCepsType);

interface SearchCepsContextProviderProps {
    children: ReactNode
  }

export function SearchCepsContextProvider ({children,}:SearchCepsContextProviderProps) {
    const [SearchCeps, setSearchCeps] = useState<SearchCepsInterface>({
        ceps: []
    })
    

    function createNewSearchCep (cep:string) {
        
        const newSearchCep: SearchCep = {
            id: Date.now(),
            cep,
            date: new Date()
          }

        setSearchCeps({ceps:[...SearchCeps.ceps, newSearchCep]})
    }


    return (
        <SearchCepsContext.Provider value={{createNewSearchCep, SearchCeps}}>
            {children}
        </SearchCepsContext.Provider>
    )
}

export default SearchCepsContextProvider;