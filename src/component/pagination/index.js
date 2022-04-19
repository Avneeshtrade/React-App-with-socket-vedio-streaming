// import React, { useEffect, useCallback, useState } from 'react';
// import ReactPaginate from 'react-paginate';
// import config from '../../config/discoverWidget';
// import Items from '../children/DisplayDiscovery';
// // import Input from '../children/Input';
// // import Select from '../children/Select';
// import styles from './pagination.module.css';


// function PaginatedItems({ itemsPerPage = 5,param }) {
//   const [currentItems, setCurrentItems] = useState(null);
//   const [pageCount, setPageCount] = useState(0);
//   // const [country, setCountry] = useState([])
//   const [itemOffset, setItemOffset] = useState(0);
//   // const [param, setParam] = useState({ code: "US", value: '',enterPressed:false });

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const result = await fetch(config.COUNTRY_URL).then(r => r.json());
//   //       setCountry([...result]);
//   //     }
//   //     catch (e) {
//   //       console.log(e)
//   //     }

//   //   }
//   //   fetchData();
//   // }, [])
//   console.log("input value : ",param);
//   useEffect(() => {

//     const fetchItems = async (locale = '*', countryCode = 'US', page = 2, size = 10) => {
//       let { BASE_URL, EVENT_CONSTANT, API_KEY } = config;
//       try {
//         if (param.code) {
//           let result = await fetch(`${BASE_URL}/${EVENT_CONSTANT}?apikey=${API_KEY}&locale=${locale}&countryCode=${countryCode}&page=${page}&size=${size}${param.value?`&keyword=${param.value}`:''}`).then(res => res.json());
//           const { page: { totalPages }, _embedded } = result;
//           if (_embedded && _embedded.events) {
//             setCurrentItems([..._embedded.events]);
//           }
//           else {
//             setCurrentItems([])
//           }
//           setPageCount(totalPages - 1);
//         }
//       }
//       catch (e) {
//         console.log(e)
//       }

//     }
//     fetchItems("*", param.code, itemOffset, itemsPerPage);

//   }, [itemOffset, itemsPerPage, param.code,param.value]);

//   // Invoke when user click to request another page.
//   const handlePageClick = (event) => {
//     const newOffset = event.selected + 1;
//     setItemOffset(newOffset);
//   };
//   // const countryHandler = useCallback((e) => {
//   //   const { value } = e.target;
//   //   setParam(s => ({
//   //     ...s,
//   //     code: value
//   //   }))
//   // })

//   // const inputHandler = useCallback((e) => {
//   //   const { value } = e.target;
//   //   setParam(s => ({
//   //     ...s,
//   //     value
//   //   }))
//   // })
//   // const keyHandler = useCallback((e) =>{
//   //   // if(e.key=='Enter'){
//   //   //     setParam(s=>({
//   //   //       ...s,
//   //   //       enterPressed:!s.enterPressed
//   //   //     }))
//   //   // }
//   // })
//   return (
//     <div>
//       <div style={{
//       }}>
//         {/* <Select items={country} style={{
//           marginLeft:'5%'
//         }} defaultValue={param.code} changeHandler={countryHandler} /> */}
//         {/* <Input style={{
//           position: 'relative',
//           left:'40%',
//           padding:'10px',
//           margin:'20px'
//         }} value={param.value} keyDownHandler={keyHandler} changeHandler={inputHandler} /> */}
//       </div>
//       <div style={{
//         height: '300px',
//       }}>
//         {
//           currentItems && currentItems.length == 0 &&
//           <h1>Data Not Found</h1>
//         }
//         <Items currentItems={currentItems} />
//         <ReactPaginate
//           breakLabel="..."
//           nextLabel="next >"
//           onPageChange={handlePageClick}
//           pageRangeDisplayed={5}
//           pageCount={pageCount}
//           previousLabel="< previous"
//           containerClassName={styles.pagination} /* as this work same as bootstrap class */
//           subContainerClassName={{ ...styles.pagination, ...styles.pages }} /* as this work same as bootstrap class */
//           activeClassName={styles.active}
//           renderOnZeroPageCount={null}
//         />
//       </div>
//     </div>

//   );
// }

// export default React.memo(PaginatedItems);