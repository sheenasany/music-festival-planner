// import React, { useState, useEffect } from "react";

// // create the context
// const FestivalsContext = React.createContext();

// // create a provider component
// function FestivalsProvider({ children }) {

//   const [festivals, setFestivals] = useState([]);

//   useEffect(() => {
//     fetch('/festivals')
//       .then(res => res.json())
//       .then(festivals => setFestivals(festivals))
//   }, [])

//   // the value prop of the provider will be our context data
//   // this value will be available to child components of this provider
//   return (
//     <FestivalsContext.Provider value={[festivals, setFestivals]}>
//       {children}
//     </FestivalsContext.Provider>
//   );
// }

// export { FestivalsContext, FestivalsProvider };
