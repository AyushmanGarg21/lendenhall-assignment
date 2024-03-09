
import Header from './components/Header';
import BrokerSection from './sections/BrokerSection';
import ClassSection from './sections/ClassSection';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className='dashboard'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<BrokerSection />} />
          <Route path="/class" element={<ClassSection />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
