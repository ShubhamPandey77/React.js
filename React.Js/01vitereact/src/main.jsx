import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';

import App from './App.jsx'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
ReactDOM.createRoot(document.querySelector('#root')).render(
    <StrictMode>
        <div>
            <App />
            
    </div>
        
    </StrictMode>
)