
import Header from './components/Header';
import BrokerSection from './sections/BrokerSection';
import ChatBot from './sections/ChatBotSection';
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
      <ChatBot />
    </div>
  )
}

export default App
