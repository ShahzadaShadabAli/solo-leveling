import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';
import api from "../inceptors/api"
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Deck from "../partials/Deck"
import axios from 'axios';
import useSelectedCharContext from '../hooks/useSelectedCharContext';

function NavBar() {
  const selected = useSelectedCharContext()
  if (selected.state.selected) {
    console.log(selected.state)
  }
  const [show, setShow] = useState(false);
  const [allChars, setAllChars] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [counts, setCounts] = useState(null)
  const { state, dispatch } = useAuthContext()
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('users')
    dispatch({ method: "LOGOUT" })
    navigate('/')
  }

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await axios.get("/userCharacter/getCount")
        setCounts(response.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchCount()
  }, [state.user])

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await axios.get("/character")
        setAllChars(response.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchCount()
  }, [])



  return (
    <Container>
      {state.user && <Modal show={show} onHide={handleClose} >
        <Modal.Header>
          <Modal.Title><img src="/images/helmet.png" width={40} /> Warrior Deck</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {allChars && <Deck char={allChars} />}
        </Modal.Body>
        <Modal.Footer className=''>
        </Modal.Footer>
      </Modal>}
      {show && selected.state.selected && (
        <div className="bottom-div d-flex gap-3">
          <img src={"/images/characters/" + selected.state.selected.img} style={{alignSelf: "flex-end"}} width={100} height={150} alt="" />
          <div className="data">
          <div className="d-flex justify-content-between">
          <div className='d-flex align-items-center gap-2'>
          <h5 className='mb-0'>{selected.state.selected.name}</h5>
          <h6 className="mb-0 poppins text-dark">({selected.state.selected.rank})</h6>
          </div>
          <div className='d-flex gap-3'>
          <div className="d-flex gap-1 align-items-center">
          <img width={20} src={"/images/characters/" + selected.state.selected.element.img} title='dark' alt="" />
          <h6 className="mb-0">{selected.state.selected.element.name}</h6>
          </div>
          <div className="d-flex gap-1 align-items-center">
           <img width={20} src={"/images/characters/" + selected.state.selected.type.img} title='fighter' alt="" />
          <h6 className="mb-0">{selected.state.selected.type.name}</h6>
          </div>
          </div>
          </div>
          <hr />
         <div className="d-flex">
           <p className='poppins text-dark w-50'>{selected.state.selected.desc}</p>
         <div className='w-50'>
          <div className="d-flex w-100 align-items-center px-3">
                    <img width={20} src="/images/heart.png" alt="" />
                    <div className="progress w-75 mx-2">
                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${(selected.state.selected.health/selected.state.selected.maxHealth) * 100}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h6 className="poppins text-dark mb-0">{selected.state.selected.health}</h6>
                </div>
                <div className="d-flex w-100 mt-2 align-items-center px-3">
                    <img width={20} src="/images/sword-fight.png" alt="" />
                    <div className="progress w-75 mx-2">
                        <div className="progress-bar sword-progress" role="progressbar" style={{ width: `100%` }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h6 className="poppins text-dark mb-0">{selected.state.selected.power}</h6>
                </div>
                <div className="d-flex w-100 mt-2 align-items-center px-3">
                    <img width={20} src="/images/water-drop.png" alt="" />
                    <div className="progress w-75 mx-2">
                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${(selected.state.selected.chu/selected.state.selected.maxChu) * 100}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h6 className="poppins text-dark mb-0">{selected.state.selected.chu}</h6>
                </div>
          </div>
         </div>
          </div>
        </div>
      )}
      <Navbar expand="lg" className="py-0 container px-5 w-100 mx-auto" style={{ position: 'fixed', zIndex: 10 }}>
        <Navbar.Brand href="#home" className='d-flex text-light align-items-center brand'>
          <img
            alt=""
            src="/images/brand.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{' '}
          Solo Leveling
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {!state.user &&<Nav className="mx-auto text-center">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Link</Nav.Link>
          </Nav>}
          {state.user &&<Nav className="mx-auto text-center">
            <Nav.Link style={{width: 100}} className='poppins-large'>
              <img className='me-2' src="/images/coin.png" width={15} alt="" />
              {state.user.user.gold}
              <div className="progress">
                <div className="progress-bar bg-warning" role="progressbar" style={{width: `${(state.user.user.gold/state.user.user.maxGold) * 100}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </Nav.Link>
            <Nav.Link style={{width: 100}} className='poppins-large'>
            <img className='me-2' src="/images/water-drop.png" width={15} alt="" />
            {state.user.user.chu}
              <div className="progress">
                <div className="progress-bar bg-primary" role="progressbar" style={{width: `${(state.user.user.chu/state.user.user.maxChu) * 100}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </Nav.Link>
            <div style={{width: 100, cursor:"pointer"}} data-bs-toggle="modal" onClick={handleShow} data-bs-target="#exampleModal">
              <img src="/images/helmet.png" width={40} alt="" />
              {counts && <div className="badge bg-light poppins-large" >{counts.attainedChar} / {counts.totalChar}</div>}
            </div>
          </Nav>}
          {!state.user && <Nav className='text-center'>
            <Link to="/login"><Button type='button' className='btn mx-1 btn-sm btn-light'>Login</Button></Link>
            <Link to="/signup"><Button type='button' className='btn mx-1 btn-sm btn-dark'>Sign Up</Button></Link>
          </Nav>}
          {state.user && <Nav className='text-center'>
            <Button type='button' onClick={handleLogout} className='btn mx-1 btn-sm btn-light'>Logout</Button>
          </Nav>}
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default NavBar;