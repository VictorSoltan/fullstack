// import {useEffect, useState} from "react";
// import {getDevice} from "../../services/axios/singleDevice.service";
// import {Device} from "../singleDevice/Device";
// import {Footer} from "../footer/Footer";
// import {useDispatch, useSelector} from "react-redux";
// // import {SortButton} from "../sortButton/SortButton";
// import './Devices.css';
//
// const Devices = () => {
//     const state = useSelector(state => {
//         const {singleDevice} = state;
//         return {singleDevice}
//     });
//     const dispatch = useDispatch();
//     const {devices} = state.singleDevice;
//
//     // const {isDescSort, setIsDescSort, sortedDevices} = useSortDevices(devices || []);
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
//             {devices
//                 .map(value => <Device item={value} key={value._id} devices={value}/>)
//             }
//
//             <Footer
//                 totalPages={devices.length}
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
// // const orderBy = (devices, price) => {
// //     if (price === 'asc') {
// //         return [...devices].sort((a, b) => (a.price > b.price ? 1 : -1));
// //     }
// //     if (price === 'desc') {
// //         return [...devices].sort((a, b) => (a.price > b.price ? -1 : 1));
// //     }
// //     return devices;
// // }
