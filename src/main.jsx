import { createRoot } from 'react-dom/client';
import { Layuot } from './Layuot';
import { BrowserRouter } from "react-router-dom";




createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Layuot />
    </BrowserRouter>
)

