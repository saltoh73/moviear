import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardMovie = ({item}) => {
  return (
<Col className='my-2' xs='6' md='4' lg='3'>

<Link to={`/movie/${item.id}`}>
<div className='card'>
    <img src={`https://image.tmdb.org/t/p/w500/`+ item.poster_path}  className='card__image' alt="" srcset="" />
    <div className='card__overlay'>

<div className='overlay__text text-center w-100 p-5 text-white'></div>

<div className='py-5 fs-4 font-bolder'>

<p className='text-white pt-5  text-center'>اسم الفيلم: {item.original_title}</p>
<p className='text-white text-center'>تاريخ الإًصدار :{item.release_date}</p>
<p className='text-white text-center'>عدد المقيمين : {item.vote_count}</p>
<p className='text-white text-center'>التقييم:{item.vote_average}   </p>

</div>
    </div>

</div>

</Link>
</Col>

    )
}

export default CardMovie
