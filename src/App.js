import { Container } from 'react-bootstrap';
import './App.css';
import Navbar from './Components/Navbar';
import MovieList from './Components/MovieList'
import { useEffect, useState } from 'react';
import axios from 'axios'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MovieDetails from './Components/MovieDetails';
import Layout from './Components/Layout';


function App() {
  const [movie, setMovie] = useState([])
  const [page,setPage]=useState(0)
  let getApi= async()=>{
    let {data}= await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar')
    // console.log(data.results)
setMovie(data.results)
setPage(data.total_pages)


  }

  let getPage = async(page)=>{
    let {data}= await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`)
setMovie(data.results)
setPage(data.total_pages)
  }

  const search =async(word)=>{

    if(word ===''){
      getApi()
    }else{
        let {data}= await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`)
setMovie(data.results)
setPage(data.total_pages)

    }
  
  }

useEffect(() => {
getApi()
}, [])


const router =createBrowserRouter([{
 path:"/",element:<Layout search={search}/>,children:[
  {path:'/movie/:id' ,element:<MovieDetails/>},
{path:'/',element: <MovieList movie={movie} getPage={getPage} page={page}/>
}
]

}])



  return (

    <RouterProvider router={router}/>



  );
}

export default App;
