const SearchBar = ({searchTerm, handleSearch}) => {
    return (
        <div className="search">
            <input className="searcher" placeholder="Я ищу сегодня..."
                   value={searchTerm} onChange={handleSearch}/>

            <button className="searchButton">Find device</button>
        </div>
    )
}

export {SearchBar};
