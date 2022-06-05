import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import Device2 from "../device/Device2";
import {useSortDevices} from "../../hooks/useSortDevices";
import {SortButton} from "../sortButton/SortButton";

const Search = () => {
    const [searchText, setSearchText] = useState("");
    const [devices, setDevices] = useState([]);

    const getDevice = () => {
        return fetch(`http://localhost:5000/devices?name=${searchText}`)
            .then(value => value.json())
            .then(value => setDevices(value.data))
    }

    useEffect(() => {
        getDevice();
    }, []);

    const {isDescSort, setIsDescSort, sortedDevices} = useSortDevices(devices || []);

    return (
        <div>
            <div>
                <SortButton className="sortBtn"
                            onClick={() => setIsDescSort(!isDescSort)}>
                    <p>Сортировать по цене</p> {`${isDescSort ? "+" : "-"}`}
                </SortButton>


                <input type="text" onChange={(e) => setSearchText(e.target.value)}/>
                <Button
                    onClick={getDevice}
                />
            </div>

            <div>
                {sortedDevices &&
                sortedDevices.map((device) => (
                        <Device2 key={device._id} id={device._id} item={device} devices={devices}/>
                    )
                )}

                {searchText && !devices &&
                <h2>No devices found</h2>}
            </div>
        </div>
    )
}

export default Search;
