// import { AppBar, Toolbar, styled } from '@mui/material';
// import { NavLink } from 'react-router-dom';


    
// // const Tabs = styled(NavLink)`
// //     color: #FFFFFF;
// //     margin-right: 20px;
// //     text-decoration: none;
// //     font-size: 20px;
// // `;

// const NavBar = () => {
    
//     return (
//         <div className="bg-red-500">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <AppBar position="static" >
//             <Toolbar className="flex ">
//               <NavLink
//                 to="wpgmp_form_location"
//                 exact
//                 className="text-white mr-4 text-lg font-semibold hover:text-gray-300 transition duration-300"
//                 activeClassName="text-gray-300"
//               >
//                 Add Location
//               </NavLink>
//               <NavLink
//                 to="all"
//                 exact
//                 className="text-white text-lg font-semibold hover:text-gray-300 transition duration-300"
//                 activeClassName="text-gray-300"
//               >
//                 All Location
//               </NavLink>
//             </Toolbar>
//           </AppBar>
//         </div>
//       </div>
//     )
// }

// export default NavBar;import { AppBar, Toolbar } from '@mui/material';
import { AppBar, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="bg-blue-950  border-b-4 border-blue-400">
      <div className="max-w-1xl mx-auto px-4 sm:px-6 lg:px-8">
     
          <Toolbar className="flex">
            <NavLink
              to="wpgmp_form_location"
              exact
              className="text-white mr-4 text-lg font-semibold hover:text-gray-300 transition duration-300"
              activeClassName="text-gray-300"
            >
              Add Location
            </NavLink>
            <NavLink
              to="all"
              exact
              className="text-white text-lg font-semibold hover:text-gray-300 transition duration-300"
              activeClassName="text-gray-300"
            >
              All Location
            </NavLink>
          </Toolbar>
      
      </div>
    </div>
  );
};

export default NavBar;
