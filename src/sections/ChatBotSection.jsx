
import { useEffect, useState } from 'react';
import Robot from "../assets/robot.gif";
import Send from "../assets/send.png";


const ChatBot = () => {

    const [toggled, disabled] = useState(false);
    const [messages, setMessages] = useState(["Hi, How can I help you?"]);
    const [currentMessage, setCurrentMessage] = useState('');

    // Handle chatbot messages
    const handleOnSubmit = (message) => {
        if(message !== ''){
            setMessages([...messages, message]);
        }
        setCurrentMessage('');
    };

    return (
        <>
            <div className='chatBot' >
                <img onClick={() => disabled(!toggled)} src={Robot} alt="Robot" />
            </div>
            {toggled && (
                <div className='chatbox'>
                    <div className='chatbox-header'>
                        <h2>Chatbot</h2>
                    </div>
                    <div className='chatbox-body'>
                        {messages.map((message, i) => (
                            <div key={i} className={`chatbox-message ${i % 2 === 0 ? 'received' : 'sent'}`}>
                                <p>{message}</p>
                            </div>
                        ))}
                    </div>
                    <div className='chatbox-footer'>
                        <input type="text" placeholder="Type a message..." value={currentMessage} onChange={(e) => setCurrentMessage(e.target.value)}/>
                        <button onClick={() => handleOnSubmit(currentMessage)}><img src={Send} alt="Sent" /></button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ChatBot;