
import Chatbot from 'react-chatbot-kit';
import { createChatBotMessage } from 'react-chatbot-kit';
import { useEffect, useState } from 'react';
import axios from 'axios';


const ChatBot = () => {
    const [chatbotConfig, setChatbotConfig] = useState(null);

    useEffect(() => {
        // Fetch chatbot configuration from your NLP chatbot solution
        axios.get('/api/chatbot/config')
            .then(response => {
                setChatbotConfig(response.data);
            })
            .catch(error => {
                console.error('Failed to fetch chatbot configuration:', error);
            });
    }, []);

    // Handle chatbot messages
    const handleOnSubmit = (message) => {
        // Implement logic to handle chatbot messages
        if (message.toLowerCase() === 'hello') return createChatBotMessage('Hi there!');
        return createChatBotMessage('Sorry, I can only handle data-related queries.');
    };

    return (
        <>
            {/* NLP Chatbot Integration */}
            <h2>Chatbot</h2>
            {chatbotConfig && (
                <Chatbot
                    config={chatbotConfig}
                    messageParser={null} // Customize message parsing if needed
                    actionProvider={{ handleOnSubmit }}
                    widgetStyle={{ width: '300px', height: '400px' }}
                />
            )}
        </>
    );
}

export default ChatBot;