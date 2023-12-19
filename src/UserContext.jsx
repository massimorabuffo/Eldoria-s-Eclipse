import { createContext, useContext, useState } from "react";

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

const AppContext = (props) => {
    const [user, setUser] = useState({
        username: 'user',
        password: '',
        remember: false,
    });

    return <UserContext.Provider value={{user, setUser}}>
        {props.children}
    </UserContext.Provider>
}

export default AppContext;