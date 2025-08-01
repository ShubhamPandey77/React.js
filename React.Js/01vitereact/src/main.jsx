import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';

import App from './App.jsx'
import Shubham from './Don.jsx'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
ReactDOM.createRoot(document.querySelector('#root')).render(
    <StrictMode><div>
         <App />
         <Shubham />
    </div>
        
    </StrictMode>
)