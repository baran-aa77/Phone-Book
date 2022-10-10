import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home/Home";
import ShowContact from "./Pages/ShowContact/ShowContact";
import AddContact from "./Pages/AddContact/AddContact"
import './App.css';

function App() {
  const filterData = [
    {id: 1, title: 'allContact'},
    {id: 2, title: 'favoriteContact'},
    {id: 3, title: 'unFavoriteContact'},
]
const [filter, setFilter] = useState('allContact')
const handleFilterBtn = title => {
  setFilter(title)
}
  const[contacts,setcontacts]=useState(
    [{
         id:14,
         FirstName:'baran',
         LastName:'ahmadi',
         Number:'09127688467',
         favorite: 'favoriteContact',
     },
 {
     id:98,
     FirstName:'elmira',
     LastName:'Asadi',
     Number:'09196578467',
     favorite: 'favoriteContact',
 },

{
  id:17,
  FirstName:'sara',
  LastName:'aliyari',
  Number:'09860670467',
  favorite: 'favoriteContact',
},]
 )
  const router = createBrowserRouter([
    {
        path: "/",
        element: <Home contacts={contacts} setcontacts={setcontacts} filter={filter} filterData={filterData} handleFilterBtn={handleFilterBtn}/>,
    },
    {
      path: "/ShowContact/:ContactID",
      element: <ShowContact contacts={contacts}/>,
  },
    {
      path: "/Add-Contact",
      element: <AddContact contacts={contacts}
      setcontacts={setcontacts} />,
  },
  {
    path: "/Edit-Contact/:ContactID",
    element: <AddContact contacts={contacts}
    setcontacts={setcontacts}/>,
},

]);
  return (
    <RouterProvider router={router}/>

  );
}

export default App;
