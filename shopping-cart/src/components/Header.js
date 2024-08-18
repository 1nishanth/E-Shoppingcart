import React from 'react'
import { Navbar, Container, Nav, Dropdown, FormControl, Badge, Button, Toast } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';

const Header = () => {


    const { state: { cart }, productDispatch } = CartState();

    return (
        <div>
            <Navbar style={{ backgroundColor: '#2874f0' }}>
                <Container>
                    <Navbar.Brand>
                        <Link to="/" className="logo" style={{ color: 'white', textDecoration: 'none' }}>OnlineShopping</Link>
                    </Navbar.Brand>

                    <Navbar.Text className='search'>
                        <FormControl
                            style={{ width: 500 }}
                            placeholder="Search a product and many more"
                            className='m-auto'
                            onChange={(e) => {
                                productDispatch({
                                    type: "FILTER_BY_SEARCH",
                                    payload: e.target.value,
                                })
                            }}
                        />
                    </Navbar.Text>

                    {/* <Nav>
                        <Button variant="light" >Login</Button>
                    </Nav> */}

                    <Nav>
                        <Dropdown>
                            <Dropdown.Toggle>
                                <Link to="/cart">
                                    <FaShoppingCart color="white" fontSize="25px" />
                                    <Badge hidden={cart.length <= 0} style={{ color: 'white' }}>{cart.length}</Badge>
                                    &nbsp;<span style={{ color: 'white' }}>Cart</span>
                                </Link>
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{ minWidth: 300 }}>

                                {cart.length > 0 ? (
                                    // checking the cart any items exists or not 
                                    // <>
                                    //     {cart.map((prod) => (
                                    //         <span className="cartitem" key={prod.id}>
                                    //             <img src={prod.image} className="cartItemImg" alt={prod.name} />

                                    //             <div className="cartItemDetail">
                                    //                 <span>{prod.name}</span>
                                    //                 <span>₹ {prod.price.split(".")[0]}</span>
                                    //             </div>
                                    //             <AiFillDelete
                                    //                 fontSize="20px"
                                    //                 style={{ cursor: "pointer" }}
                                    //                 onClick={() =>
                                    //                     dispatch({
                                    //                         type: "REMOVE_FROM_CART",
                                    //                         payload: prod,
                                    //                     })
                                    //                 }
                                    //             />
                                    //         </span>
                                    //     ))}
                                    //     <Link to="/cart">
                                    //         <Button style={{ width: "95%", margin: "0 10px" }}>
                                    //             Go To Cart
                                    //         </Button>
                                    //     </Link>
                                    // </>
                                    ''
                                ) :
                                    // (<span style={{ padding: 10 }}>Cart is Empty!</span>)}
                                    (<Toast>
                                        {/* <Toast.Header>
                                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                            <strong className="me-auto">Notification</strong>
                                        </Toast.Header> */}
                                        <Toast.Body>Cart is Empty!</Toast.Body>
                                    </Toast>)}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>

                </Container>
            </Navbar>
        </div >
    )
}

export default Header