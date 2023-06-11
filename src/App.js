import React, { useEffect, useState } from 'react';
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
import NotFoundPage from './app/components/NotFoundPage';
import MyContext from './assets/MyContext';
import { IS_BOOLEAN } from './mapper';
import Spinner from './app/components/Spinner';
import data from './assets/data_two.json';

function App() {
  const [newsData, setNewsData] = useState(data);
  const [isLoading, setIsLoading] = useState(IS_BOOLEAN['TRUE']);
  useEffect(() => {
    if (newsData) {
      setIsLoading(IS_BOOLEAN['FALSE']);
    }
  }, [newsData])
  return (
    <>
    {console.log(isLoading, newsData)}
    
    {isLoading && (<Spinner/>)}
    {!isLoading && JSON.stringify(newsData).length > 10 && (
    <MyContext.Provider value={newsData}>
        <Router basename="/">
      <Header />
      <Container className="pos-top mb-130x">
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* Not in use from */}
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/admin-board" element={<DashBoard />} />
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
            <Route path='*' element={<NotFoundPage />}/>
          </Routes>
      </Container>
      <Footer />
        </Router>
    </MyContext.Provider>
    )}
    </>
  );
}

export default App;
