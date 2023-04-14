import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormPage from './components/FormPage';
import ListPage from './components/ListPage';
import Layout from './components/Layout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<ListPage/>} />
            <Route path="/add" element={<FormPage/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
