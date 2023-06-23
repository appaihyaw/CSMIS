import React from 'react';
import Dropdown from './Dropdown';
import Login from './components/Login';

function App() {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="University_of_Ghana.png" alt="ugLogo" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <Dropdown />
        </div>
        <Login/>
      </div>
    </section>
  );
}

export default App;