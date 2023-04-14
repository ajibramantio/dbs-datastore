import { Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Layout = ({children})=>{
      const router = useNavigate();
    return(
        <div>
             <Navbar expand="lg" importantx style={{width: '100%', background: '#FFFFFF'}}>
          <Navbar.Brand href="/">
          <img
              src="/logo512.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <span className="navbar-menu" style={{paddingRight: '10px'}} onClick={()=>router('/')}>Data List</span>
              <span className="navbar-menu" onClick={()=>router('/add')}>Add Form</span>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {children}
      </div>
    )
}

export default Layout;