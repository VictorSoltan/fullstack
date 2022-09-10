import './Search.css';
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const Search = () => {
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

    const inputHandler = (e) => {
        setSearchText(e.target.value);
    };

    const navigateFunction = (e) => {
        e.preventDefault();
        navigate(`/search/${searchText}`);
    };

    return (
        <form className="formSearch">
            <input type="text" onChange={inputHandler} placeholder="Пошук" className="inputForSearch"/>
            <div style={{"position": 'absolute', 'right': '289px'}}>
                <button type="submit" onClick={navigateFunction} className="buttonForSearch">Search</button>
            </div>
        </form>
    )
}

export {Search};
