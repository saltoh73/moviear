import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CardMovie from './CardMovie'
import PaginationComponent from './PaginationComponent'

const MovieList = ({movie,getPage,page}) => {
  return (
 <Container>
   <Row className='mt-5'>

{
  movie.length>=1? movie.map((item)=>{
    return    <CardMovie key={item.id} item={item}/>
  })
  :<h1 className='text-center py-5'>لا يوجد أفلام الأن</h1>
}

 
<PaginationComponent getPage={getPage} page={page}/>
  </Row>
 </Container>
  )
}

export default MovieList
