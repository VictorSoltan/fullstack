import {useState} from "react";
import {AuthContext} from "../../contexts/AuthContext";

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const logIn = (newUser, cb) => {
        setUser(newUser);
        cb();
    }

    const logOut = (cb) => {
        setUser(null);
        cb();
    }

    const value = {user,logIn, logOut}
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthProvider, AuthContext};
