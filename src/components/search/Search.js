import {Component} from "react";

class SearchBar extends Component {


    render() {
        return (
            <div className="search">
                <div>
                    <input className="searcher" placeholder="Я ищу сегодня..."
                            ref={(input) => { this.deviceInput = input }}/>
                    <button className="searchButton" onClick={this.findDevices.bind(this)}>Find device</button>
                </div>
            </div>
        );
    }
}

export default SearchBar;


