import React from 'react'
import {Container, Row, Col} from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import  logo from "../logo (1).png"

const Navbar = ({search}) => {
  const onSearch=(word)=>{
search(word)
  }
  return (
    <div className='nav-style w-100'>
      <Container>
<Row className='pt-2'>
<Col xs='2' lg='1'>
<Link to='/'>
<img src={logo} alt="" srcset="" className='logo' />

</Link>
</Col>

<Col className='d-flex align-items-center ' xs='10' lg='11'>
<div className='search  w-100'>

    <i className='fa fa-search'></i>
<input type="text" className='form-control' onChange={(e)=> onSearch(e.target.value)} placeholder='ابحث هنا ' />

</div>

</Col>

</Row>



      </Container>
    </div>
  )
}

export default Navbar
