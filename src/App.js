import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormPage from './components/FormPage';
import ListPage from './components/ListPage';

function App() {
  return (
    <div>
      <Navbar expand="lg" important style={{width: '100%', background: '#FFFFFF'}}>
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
              <Nav.Link href="/">Data List</Nav.Link>
              <Nav.Link href="/add">Add Form</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ListPage/>} />
          <Route path="/add" element={<FormPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
