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
        <div className="searchContainer">
            <form>
                <input type="text" onChange={inputHandler} className="inputForSearch"/>
                <button type="submit" onClick={navigateFunction}>Search</button>
            </form>
        </div>
    )
}

export {Search};
