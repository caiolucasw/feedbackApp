import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Feedback from './components/FeedBack';
import FeedBackStats from './components/FeedBackStats';
import FeedBackForm from './components/FeedBackForm';
import './index.css';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';


const App = () => {

    return (
        <FeedbackProvider>
            <Router>
                <Header />
            
                <div className="container">
                    <Routes>
                        <Route 
                            exact 
                            path="/"
                            element={
                                <>
                                    <FeedBackForm />
                                    <FeedBackStats />
                                    <Feedback />
                                </>

                            }
                        />
                        <Route exact path="/about" element={<AboutPage />}/>
                        
                        
                    </Routes>
                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    );
};

export default App;