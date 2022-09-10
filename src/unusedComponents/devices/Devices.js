// import {useEffect, useState} from "react";
// import {getDevice} from "../../services/axios/product.service";
// import {Product} from "../product/Product";
// import {Footer} from "../pagination/Footer";
// import {useDispatch, useSelector} from "react-redux";
// // import {SortButton} from "../sortButton/SortButton";
// import './Devices.css';
//
// const Devices = () => {
//     const state = useSelector(state => {
//         const {product} = state;
//         return {product}
//     });
//     const dispatch = useDispatch();
//     const {products} = state.product;
//
//     // const {isDescSort, setIsDescSort, sortedDevices} = useSortDevices(products || []);
//
//     const [page, setPage] = useState(1);
//
//     useEffect(() => {
//         getDevice(page, 8, 2, 8500, 'mobi')
//             .then(value => {
//             dispatch({type: "FETCH_DEVICES", payload: value.data});
//         });
//     }, [page]);
//
//     const paginationHandler = (num) => {
//         setPage(page + num);
//     };
//
//     return (
//         <div>
//             {/*<SortButton className="sortBtn"*/}
//             {/*            onClick={() => setIsDescSort(!isDescSort)}>*/}
//             {/*    Сортировать по цене {`${isDescSort ? "+" : "-"}`}*/}
//             {/*</SortButton>*/}
//
//             {products
//                 .map(value => <Product item={value} key={value._id} products={value}/>)
//             }
//
//             <Footer
//                 totalPages={products.length}
//                 page={page}
//                 paginationHandler={paginationHandler}/>
//         </div>
//     );
// }
//
// export {Devices};
//
//
//
//
// // const orderBy = (products, price) => {
// //     if (price === 'asc') {
// //         return [...products].sort((a, b) => (a.price > b.price ? 1 : -1));
// //     }
// //     if (price === 'desc') {
// //         return [...products].sort((a, b) => (a.price > b.price ? -1 : 1));
// //     }
// //     return products;
// // }
