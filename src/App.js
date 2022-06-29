

// npx create-react-app github-search - To create initial file
// npm i -D tailwindcss postcss autoprefixer - To install tailwind css classes
// npm i daisyui - To install daisy ui classes
// npm i react-router-dom - To do routing
// npm i react-icons - To get react icons

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';
import About from './Pages/About';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      
      
    </Router>
  );
}

export default App;
