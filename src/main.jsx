import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Favourites from './pages/Favourites.jsx'
import Error from './pages/Error.jsx'

const router = createBrowserRouter([
  {element:<App/>,
   errorElement: <Error/>,
   children:[
    {
      path:"/",
      element:<Home/>,
    },
    {
      path:"/favourites",
      element:<Favourites/>,
    },
   ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
