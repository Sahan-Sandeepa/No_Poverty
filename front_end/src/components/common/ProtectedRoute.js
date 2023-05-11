// import React from 'react';
// import { Route, Navigate, Routes } from 'react-router-dom';

// const ProtectedRoute = ({ path, element: Element }) => {
//   // Check if the JWT exists and is valid
//   const isAuthenticated = localStorage.getItem('jwt') !== null;

//   return (
//     <Routes>
//       <Route
//         path={path}
//         element={isAuthenticated ? <Element /> : <Navigate to="/login" />}
//       />
//     </Routes>
//   );
// };

// export default ProtectedRoute;
