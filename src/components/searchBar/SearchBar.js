const SearchBar = ({searchTerm, handleSearch}) => {
    return (
        <div className="search">
            <div>
                <input className="searcher" placeholder="Я ищу сегодня..."
                       value={searchTerm} onChange={handleSearch}/>

                <button className="searchButton">Find device</button>
            </div>
        </div>
    )
}

export {SearchBar};
