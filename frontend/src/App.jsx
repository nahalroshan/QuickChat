import MessageContainer from "./components/messages/messagecontainer";
import ChatWindow from "./pages/chat/chatwindow";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat-window" element={<ChatWindow />} />
        <Route path="/message-window" element={<MessageContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
