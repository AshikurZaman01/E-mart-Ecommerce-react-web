import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../Components/Pages/Home/Home'
import About from '../Components/Pages/About/About'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            }
        ]
    }
])

export default router