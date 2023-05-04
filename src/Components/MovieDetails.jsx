import axios from 'axios';
import React, { useEffect, useState } from 'react'
import usePlaceholder from 'react-bootstrap/esm/usePlaceholder';
import { Link, useParams, useSearchParams } from 'react-router-dom';

const MovieDetails = () => {
    const param = useParams();
    const [movie, setMovie] = useState([])

    const getMovieDetails = async () => {
        const {data}= await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`)
        setMovie(data)
        console.log(data)
    }
    useEffect(() => {
        getMovieDetails();
    }, [])
  return (

<div className='overflow-hidden'>
<div className="row ">
            <div className="col-md-4">
                <img src={`https://image.tmdb.org/t/p/w500/`+ movie.poster_path} className='img-movie  classs w-50' alt="" srcset="" />

            </div>
            <div className="col-md-8 ">
<div className="classss">
<h3 className='py-2'>اسم الفيلم: <span className='text-danger  m-5'>{movie.title}</span></h3>
<h3 className='py-2'>تاريخ الفيلم : <span className='text-danger  m-2'>{movie.release_date}</span></h3>
<h3 className='py-2'>عدد المشاهدين :<span className='text-danger m-5'>{movie.vote_count}</span></h3>
<h3 className='py-2'>التقييم:<span className='text-danger  m-5'>{movie.vote_average}</span> </h3>

</div>

            </div>

        </div>



<div className='mx-5'>
    <h3 >القصة : </h3>
    <div>
        <p className='my-4 fs-3 font-bold text-danger'>{movie.overview}</p>
    </div>
    <div className='d-flex justify-content-center py-5'>
    <Link to="/">
                        <button
                            
                            className="btn btn-primary mx-2">
                            عوده للرئيسيه
                        </button>
                    </Link>



                    <a href={movie.homepage} >
                        <button
                            className="btn btn-info">
                            مشاهده الفيلم
                        </button>
                    </a>

    </div>
</div>

</div>
    )
}

export default MovieDetails
