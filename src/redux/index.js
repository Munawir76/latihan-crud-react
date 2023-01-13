// import React from "react";

// export default function Reduxs() {
//   return (
//     <div>
//       <p>ini</p>
//     </div>
//   );
// }

const redux = require("redux");
const createStore = redux.createStore;

const rootReducer = (state, action) => {
  return state;
};

const store = createStore(rootReducer);
console.log(store, "ini store");
