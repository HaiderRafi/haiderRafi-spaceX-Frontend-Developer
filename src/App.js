import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import AppLayout from './components/AppLayout';
import Body from './components/Body';
import CardInfo from './components/CardInfo';

function App() {
  let appRouter=createBrowserRouter([
    {
      path:"/",
      element: <AppLayout/>,
      children:[
        {
          path:"/",
          element:<Body/>

        },
        {
          path:"capsule/:id",
          element:<CardInfo/>

        }
        
      ]
      

    }
  ])

  return (
    <>
    <div>
      <RouterProvider router={appRouter}/>


    </div>
    
   
    
    </>
  );
}

export default App;
