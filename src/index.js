import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './App';


// export const Context = createContext(null)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//         <Context.Provider value={{
//           user: new UserStore(),
//           device: new DeviceStore(),
//           helpers: new HelpersStore(),
//       }}>


//           <App />
//       </Context.Provider>,
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
