import React, {useEffect, useState} from 'react';
import axios from "axios";
//import TmdbApiUrl from "./apiUrl";
//
// export default class FetchUrl extends Component{
//   constructor(url) {
//     super();
//     this.url=url;
//   }
//   state = {
//     loading: true,
//     mainData: null
//   };
//
//   componentWillMount() {
//     //const apiKey = `d531f0b35e33ab3572f10065361d3ae1`;
//     //const url = `${TmdbApiUrl.baseURL()}movie/popular?api_key=${apiKey}&page=1`;
//     axios
//         .get(this.url)
//         .then((res) => {
//           console.log(`this.url==>${this.url}`);
//           this.setState({
//             loading: false,
//             mainData: res
//           });
//           // console.log(`#@loading==>${this.state.loading}`);
//           // console.log(`#@status==>${this.state.status}`);
//           // console.log(`#@FetchedData==>${(this.state.mainData)}`);
//           // console.log(`#@FetchedData.page==>${(this.state.mainData.page)}`);
//           // console.log(`#@FetchedData(stringify)==>${JSON.stringify(this.state.mainData)}`);
//         })
//   }
//   render() {
//     return this.state;
//   }
// }

//
//
//  const FetchUrl=async (url)=>{
//   try {
//     useEffect(()=>{
//     let [data,setData]=useState(null);
//      await axios
//        .get(url)
//        .then(res=>setData(res));
//       },[url]);
//     return data
//   }
//   catch (err) {
//     return {error:err}
//   }
// };
// export default FetchUrl
