import React from "react";
import { Navbar, Nav, Form, FormControl, Button, InputGroup } from "react-bootstrap";
import "../../assets/nav.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import mtb from '../../assets/images/mtb.png'
import {Link as RouterLink} from "react-router-dom";

const Navigation = () => {
  return (
    <div className="fluid mainDiv">
      <Navbar bg="dark" variant="dark" className="navDiv">
        <RouterLink to="/home">
          <img src={mtb} alt="MTB" className="logo"/></RouterLink>
        <Nav className="mr-auto ml-2 childNavs">
          <Nav.Link href="#movies" className="mx-1 text-uppercase font-weight-normal font-weight-bold parentText">Movies
            <div className="p-0 m-0 d-flex flex-wrap">
              <Nav.Link href="/media_list/movie/popular/1" className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child1">popular
              </Nav.Link>
              <Nav.Link href="/media_list/movie/top_rated/1" className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child2">top rated
              </Nav.Link>
              <Nav.Link href="/media_list/movie/in_the_air/1" className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child3">in theaters
              </Nav.Link>
              <Nav.Link href="/media_list/movie/upcoming/1" className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child4">upcoming
              </Nav.Link></div>
          </Nav.Link>
          <Nav.Link href="#tvShows" className="mx-1 text-uppercase font-weight-normal font-weight-bold parentText">Tv shows
            <Nav.Link href="/media_list/tv/popular/1" className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child1">popular
            </Nav.Link>
            <Nav.Link href="/media_list/tv/top_rated/1" className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child2">top rated
            </Nav.Link>
            <Nav.Link href="/media_list/tv/on_the_air/1" className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child3 "> Now on air
            </Nav.Link>
            <Nav.Link href="/media_list/tv/airing_today/1" className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child4">Airing today
            </Nav.Link>
          </Nav.Link>
          <Nav.Link href="#actors" className="mx-1 text-uppercase font-weight-normal font-weight-bold parentText">Actors
            <Nav.Link href="/media_list/person/popular/1" className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child1">popular
            </Nav.Link>
          </Nav.Link>
        </Nav>
        <Form inline>
          <InputGroup>
            <FormControl type="text" placeholder="Search" className="btn-outline-dark searchInput"
            />
            <Button type="submit" variant="info" className="btn bg-secondary btn-outline-dark"><FontAwesomeIcon icon={faSearch} />
            </Button>
          </InputGroup>
        </Form>
        <RouterLink to="/user_details/userId">
        <img className="ml-3 bg-white avatarCircle" alt="U"/>
        </RouterLink>
      </Navbar>
    </div>
  );
};

export default Navigation;




// import React from "react";
// import { Navbar, Nav, Form, FormControl, Button, InputGroup } from "react-bootstrap";
// import "../assets/nav.sass"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch} from '@fortawesome/free-solid-svg-icons'
// import mtb from '../assets/images/mtb.png'
//
// const Navigation = () => {
//   const iconStyle={height:'2rem'};
//   return (
//       <div>
//         <Navbar bg="dark" variant="dark" className="mainNav">
//           <img src={mtb} alt="MTB" className="" style={iconStyle}/>
//           <Nav className="mr-auto ml-2 childNavs">
//             <Nav.Link href="#movies" className="mx-1 text-uppercase font-weight-normal parentText">Movies
//               <div className="p-0 m-0 d-flex flex-wrap">
//                 <Nav.Link href="pop" className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child1 border-right"><routerLink>popular</routerLink>
//                 </Nav.Link>
//                 <Nav.Link href="top" className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child2 border-right"><routerLink>top rated</routerLink>
//                 </Nav.Link>
//                 <Nav.Link href="the" className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child3 border-right"><routerLink>in theaters</routerLink>
//                 </Nav.Link>
//                 <Nav.Link href="com" className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child4"><routerLink>upcoming</routerLink>
//                 </Nav.Link></div>
//             </Nav.Link>
//             <Nav.Link href="#tvShows" className="mx-1 text-uppercase font-weight-normal parentText">Tv shows
//               <Nav.Link href="pop" className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child1"><routerLink> popular</routerLink>
//               </Nav.Link>
//               <Nav.Link href="top" className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child2"><routerLink>top rated</routerLink>
//               </Nav.Link>
//               <Nav.Link href="the" className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child3 "><routerLink>Now on air</routerLink>
//               </Nav.Link>
//               <Nav.Link href="com" className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child4"><routerLink>Airing today</routerLink>
//               </Nav.Link>
//             </Nav.Link>
//             <Nav.Link href="#actors" className="mx-1 text-uppercase font-weight-normal parentText">Actors
//               <Nav.Link href="pop" className="px-2 m-0 text-uppercase btn-sm text-dark bg-white font-italic font-weight-bold childText child1"><routerLink>popular</routerLink>
//               </Nav.Link>
//             </Nav.Link>
//           </Nav>
//           <Form inline>
//             <InputGroup>
//               <FormControl type="text" placeholder="Search" className="btn-outline-dark searchInput"
//               />
//               <Button type={"submit"} variant="info" className="btn bg-secondary btn-outline-dark"><FontAwesomeIcon icon={faSearch} />
//               </Button>
//             </InputGroup>
//           </Form>
//           <div className="ml-3 bg-white avatarCircle">
//           </div>
//         </Navbar>
//       </div>
//   );
// };
//
// export default Navigation;
