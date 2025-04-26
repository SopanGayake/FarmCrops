import React from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TermPolicies from './components/Term&Policies';
import TextForm from './components/TextForm';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import ResistrationForm from './components/ResistrationForm'; // Added import

function App() {
  return (
    <>
      <Navbar title="FarmCrops" aboutText="About us" dropdownText="Location" dashboardText="Home" CartText="Your order" />
      {/* <div className="container my-4">
        <TextForm heading="Fill this registration form" Textarea="Description" />
      </div>
      <ResistrationForm />
      <About />
      <TermPolicies /> */}
      <div>
      <LandingPage />
      </div>
    </>
  );
}

export default App;
