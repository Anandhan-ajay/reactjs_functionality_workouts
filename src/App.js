import React, { createContext, useState } from 'react';
import './App.css';
import Header from './screens/useContextGlobally/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/useContextGlobally/Home';
import ViewCart from './screens/useContextGlobally/ViewCart';
//workouts
// import Workouts from './screens/Workouts/Workouts';
// import CrudApp from './screens/crud';
// import HookUseMemo from './screens/Hooks';
// import HookUseContext from './screens/Hooks/HookUseContext';
// import HookUseMemoExample from './screens/Hooks/HookUseMemo';
// import HookUseCallBack from './screens/Hooks/HookUseCallBack';
// import MockApi from './screens/api/MockApi';
// import QrCodeGenenrator from './screens/qrcodegenerator';
import WorkoutsOne from './screens/Workouts/WorkoutsOne';
import { Provider } from 'react-redux';

import SampleWorkouts from './screens/redux-workouts/SampleWorkouts';
import store from './store';
import DimensionForm from './takaworkouts';
import PhotoUpload from './takaworkouts/PhotoUpload';
import ProductCatalog from './takaworkouts/ProductCatalog';
// import Context from './screens/useContextGlobally';




export const cartContext = createContext();
function App() {
  const [cart , setCart] = useState([]);
  const [dimensions, setDimensions] = useState(null);
  const [photo, setPhoto] = useState(null);
  return (
    // <cartContext.Provider value={{cart , setCart}}>
    // <BrowserRouter>
    //   <Header />
    //   <div className='container'>
    //   <Routes>
    //     <Route path='/' element={<Home />}/>
    //     <Route path='/Cart' element={<ViewCart />}/>
    //   </Routes>
    //   </div>
    // </BrowserRouter>
    // </cartContext.Provider>
    // <div className="App">
    //    {/* <h1>World wide...</h1> */}
    //    {/* <HookUseMemo/> */}
    //    {/* <HookUseContext/> */}
    //    {/* <Workouts/> */}
    //    {/* <CrudApp/> */}
    //    {/* <HookUseMemoExample/> */}
    //    {/* <HookUseCallBack/> */}
    //    {/* <MockApi/> */}
    //    {/* <QrCodeGenenrator/> */}
    //    <WorkoutsOne/>
    //  </div>
<>
    <Provider store={store}>
      <h1>Redux</h1>
      {/* <SampleWorkouts/> */}
      <WorkoutsOne/>
    </Provider>
    
</>
  //  
  // <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-8">
  //     {/* <h1 className="text-4xl font-bold text-center text-gray-600 mb-8">
  //       Mannequin Customization App
  //     </h1> */}
  //     <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-700 mb-8 tracking-wide leading-snug drop-shadow-md">
  //       Mannequin Customization App
  //     </h1>

  //     {/* <div className="max-w-4xl mx-auto shadow-lg rounded-lg p-6"> */}
  //     <div className="">
  //       <DimensionForm
  //         onSubmit={(data) => setDimensions(data)}
  //       />
  //       {/* <hr className="my-6 border-t border-gray-300" /> */}
  //       <PhotoUpload
  //         onPhotoUpload={(file) => setPhoto(file)}
  //       />
  //       {dimensions && photo && (
  //         <div className="mt-6">
  //           <h3 className="text-2xl font-semibold text-gray-700">
  //             Your Dimensions:
  //           </h3>
  //           <pre className="bg-gray-100 p-4 rounded-md text-sm text-gray-800">
  //             {JSON.stringify(dimensions, null, 2)}
  //           </pre>
  //           <h3 className="text-2xl font-semibold text-gray-700 mt-6">
  //             Uploaded Photo:
  //           </h3>
  //           <img
  //             src={URL.createObjectURL(photo)}
  //             alt="Uploaded"
  //             className="w-48 h-auto mt-4 rounded-lg shadow-md"
  //           />
  //         </div>
  //       )}
  //     </div>
  //     <div className="mt-8">
  //       <ProductCatalog />
  //     </div>
  //   </div>
   
  );
}

export default App;
