import './SearchBar.css';

const SearchBar = ({setValue}) => {
    const onSearchChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <form className="search">
            <input className="searcher" placeholder="Я ищу сегодня..."
                   onChange={onSearchChange}/>
            <button className="searchButton" placeholder="Search"></button>
        </form>

    )
}

export default SearchBar;
