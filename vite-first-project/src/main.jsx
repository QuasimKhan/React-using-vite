// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import Layout from './Layout'
// import Home from './components/Home/Home'
// import About from './components/About/About'
// import Quasim from './components/About/Quasim'
// import Contact from './components/Contact/Contact'

// import './index.css'

// // const router = createBrowserRouter([
// //   {
// //     path: '/',
// //     element: <Layout/>,
// //     children:[
// //       {
// //         path: "",
// //         element: <Home/>
// //       },
// //       {
// //         path: "about",
// //         element: <About/>,
// //         children: [
// //           {
// //             path: "quasim",
// //             element: <Quasim/>
// //           }
// //         ]
// //       },
// //       {
// //         path: "contact",
// //         element: <Contact/>
// //       }
// //     ]
// //   }
// // ])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>

//       <Route path='' element={<Home/>}/>
//       <Route path='about' element={<About/>}>
//         <Route path='quasim' element={<Quasim/>}/>
//       </Route>
//       <Route path='contact' element={<Contact/>}/>  


//     </Route>

//   )
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// )




import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Quasim from './components/About/Quasim';
import Contact from './components/Contact/Contact';

import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />}/>
      <Route path='about/quasim' element={<Quasim />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
