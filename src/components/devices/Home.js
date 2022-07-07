import {useEffect, useState} from "react";
// import {Button} from "react-bootstrap";
import {Footer, Device, Sort, FindByBrand} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy, setTypeDevice} from "../../redux/actions/filtersAction";
import React from 'react';
import {getDevice} from "../../services/axios/device.service";
import qs from "qs";
import {useNavigate} from "react-router-dom";
import {FindByCategory} from "../categories/FindByCategory";

const Home = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const state = useSelector(state => {
        const {category} = state;
        return {category};
    });

    const {brand, type, sortBy} = state.category;

    const [searchText, setSearchText] = useState("");
    const [devices, setDevices] = useState([]);
    const [page, setPage] = useState(1);
    const [limit] = useState(7);

    const sort = sortBy.sortProperty.replace('+', '');
    const order = sortBy.sortProperty.includes('+') ? 'desc' : 'asc';

    useEffect(() => {
        getDevice(searchText, page, limit, sort, order, brand, type)
            .then(value => setDevices(value.data.data))
    }, [searchText, page, limit, sort, order, brand, type]);

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
        }
    }, []);

    useEffect(() => {
        const queryString = qs.stringify({
            page,
            sort,
            brand
        });

        navigate(`?${queryString}`);
    }, [page, sort, brand]);

    const paginationHandler = (num) => {
        setPage(page + num);
    };

    const onChangeCategory = React.useCallback((id) => {
        dispatch(setCategory(id));
    }, [dispatch]);

    const onChangeType = React.useCallback((id) => {
        dispatch(setTypeDevice(id));
    }, [dispatch]);

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type));
    }, [dispatch]);

    return (
        <div className="myClass">
            <div className="myClass">
                <input type="text" onChange={(e) => setSearchText(e.target.value)}
                       className="inputForSearch"/>

                <Sort onChangeSort={(i) => onSelectSortType(i)} activeSortType={sortBy.sortProperty}/>
            </div>
            <FindByBrand value={brand} onClickCategory={onChangeCategory}/>
            <FindByCategory value={type} onClickCategory={onChangeType}/>
            <div className="myClass">
                {
                    devices.map(value => (
                            <Device key={value._id} id={value._id} item={value} devices={value}/>
                        )
                    )}

                {searchText && !devices &&
                <h2>No devices found</h2>}

                <Footer
                    totalPages={devices}
                    page={page}
                    paginationHandler={paginationHandler}/>
            </div>
        </div>
    )
}

export default Home;


// {/*<SortButton className="sortBtn"*/}
// {/*            onClick={() => setIsDescSort(!isDescSort)}>*/}
// {/*    <p>Сортировать по цене</p> {`${isDescSort ? "+" : "-"}`}*/}
// {/*</SortButton>*/}

// {/*<Button*/}
// {/*    onClick={getDevice}*/}
// {/*    className="buttonForSearch"*/}
// {/*>Search</Button>*/}
