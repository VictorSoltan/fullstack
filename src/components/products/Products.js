import {useEffect, useState} from "react";
import {Footer, Product, Sort, FindByBrand} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy, setTypeDevice} from "../../redux/actions/filtersAction";
import React from 'react';
import {getDevice} from "../../services/axios/device.service";
import qs from "qs";
import {useNavigate} from "react-router-dom";
import {FindByCategory} from "../categories/FindByCategory";
// import Sliders from "../slider/Slider";
import {mobile} from '../../responsive';

import styled from 'styled-components';

const Products = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const Filter = styled.div`
      //margin: 20px;
      ${mobile({width: "0px 20px", display: "flex", flexDirection: "column"})}
    `;

    const state = useSelector(state => {
        const {category, cart} = state;
        return {category, cart};
    });

    const {brand, type, sortBy} = state.category;

    const [devices, setDevices] = useState([]);
    const [page, setPage] = useState(1);
    const [limit] = useState(8);

    const sort = sortBy.sortProperty.replace('+', '');
    const order = sortBy.sortProperty.includes('+') ? 'desc' : 'asc';

    useEffect(() => {
        getDevice(page, limit, sort, order, brand, type)
            .then(value => setDevices(value.data.data))
    }, [ page, limit, sort, order, brand, type]);

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
            <div className="sideBar">
                <Filter>
                    <Sort onChangeSort={(i) => onSelectSortType(i)} activeSortType={sortBy.sortProperty}/>
                </Filter>

                <Filter>
                    <FindByBrand value={brand} onClickCategory={onChangeCategory}/>
                </Filter>
                <Filter>
                    <FindByCategory value={type} onClickCategory={onChangeType}/>
                </Filter>
            </div>
            <div className="contentMy">
                {
                    devices.map(value => (
                            <Product key={value._id} id={value._id} item={value} devices={value}/>
                        )
                    )}
            </div>


            {/*<Sliders/>*/}

            <Footer
                totalPages={devices}
                page={page}
                paginationHandler={paginationHandler}/>
        </div>
    )
}

export default Products;


// {/*<SortButton className="sortBtn"*/}
// {/*            onClick={() => setIsDescSort(!isDescSort)}>*/}
// {/*    <p>Сортировать по цене</p> {`${isDescSort ? "+" : "-"}`}*/}
// {/*</SortButton>*/}

// {/*<Button*/}
// {/*    onClick={getDevice}*/}
// {/*    className="buttonForSearch"*/}
// {/*>Search</Button>*/}
