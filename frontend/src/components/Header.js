import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Navbar,Nav, Row, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'
import  SearchBox  from './SearchBox'

function Header() {

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>TechShop</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="basic-navbar-nav">
                    
                    <SearchBox />
                    <Nav
                    className="ml-auto"
                    style={{ maxHeight: '100px'}}
                    navbarScroll
                    >
                    <LinkContainer to="/cart">
                        <Nav.Link><i className="mx-2 fas fa-shopping-cart"></i>Cart</Nav.Link>
                    </LinkContainer>

                    {userInfo ? (
                     <NavDropdown title={userInfo.name} id="username">
                         <LinkContainer to="/profile">
                             <NavDropdown.Item>Profile</NavDropdown.Item>
                         </LinkContainer>
                         <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                     </NavDropdown>   
                    ): (

                    <LinkContainer to="/login">
                        <Nav.Link><i className="mx-2 fas fa-user"></i>Login</Nav.Link>
                    </LinkContainer>

                    )}

                    {userInfo && userInfo.isAdmin && (
                        <NavDropdown title='Admin' id='adminmenue'>
                            <LinkContainer to='/admin/userlist'>
                                <NavDropdown.Item>Users</NavDropdown.Item>
                            </LinkContainer>

                            <LinkContainer to='/admin/orderlist'>
                                <NavDropdown.Item>Orders</NavDropdown.Item>
                            </LinkContainer>

                        </NavDropdown>
                    )}

                    

                    </Nav>
                    
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
