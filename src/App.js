import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './app/components/Header';
import Login from './app/components/Login';
import DashBoard from './app/components/DashBoard';
import { Container } from 'react-bootstrap';
import Home from './app/components/Home';
import Footer from './app/components/Footer';
import GenerateNews from './app/components/GenerateNews';
import HomeContent from './app/templates/home-content/HomeContent';
import StateNews from './app/components/StateNews';
import HomeManagement from './app/components/HomeManagement';

function App() {
  return (
    <>
      <Header />
      <Container className="pos-top mb-130x">
        <Router basename="/">
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* Not in use from */}
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/admin-board" element={<DashBoard />} />
            <Route exact path="/admin-board/:category" element={<GenerateNews />} />
            <Route exact path="/create-news" element={<GenerateNews />} />
            <Route exact path="/update/:id" element={<GenerateNews />} />
            {/* Not in use end*/}
            <Route
              exact
              path="/content/:category/:slug"
              element={<HomeContent />}
            />
            <Route exact path="/news/:category" element={<StateNews />} />
            <Route exact path='/home-management' element={<HomeManagement/>}/>
          </Routes>
        </Router>
      </Container>
      <Footer />
    </>
  );
}

export default App;
