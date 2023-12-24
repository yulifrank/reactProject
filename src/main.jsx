import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DesignWorksConstruction from './components/designWorksConstruction/DesignWorksConstruction.jsx'
import InitMeeting from './components/singleMeeting/SingleMeeting.jsx'
import InitService from './components/singleService/SingleService.jsx'
import LoginPage from './components/loginPage/LoginPage.jsx'
import Admin from './components/admin/Admin'
import SingleService from './components/singleService/SingleService.jsx'
import ServicesList from './components/servicesList/ServicesList.jsx'
import MeetingList from './components/meetingList/MeetingList.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <DesignWorksConstruction />,
    errorElement:<div>error app</div>,
    children: [
          {
            path: ':id',
            element: <SingleService />,
            errorElement:<div>error contant not found</div>
          }]
  },
 
  {
    path: '/admin',
    element: <Admin />,
    errorElement: <div>error contants</div>,
    children: [
   
      {
        path: 'services',
        element: <ServicesList/>,
        errorElement: <div>error contant not found</div>
      },
      {
        path: 'meeting',
        element:<MeetingList/>,
        errorElement: <div>error contant not found</div>
      }
    ]
  }
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
   
  </React.StrictMode>,
)
