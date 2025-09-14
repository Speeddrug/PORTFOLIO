import { useState, useEffect } from 'react';
import axios from 'axios';

function MessageList() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/admin/messages', {
            headers: {
                Authorization: 'Bearer your_admin_token'
            }
        })
        .then(res => setMessages(res.data))
        .catch(err => console.error(err));
    }, []);

    return (
        <div className="max-w-2xl">
            {messages.length === 0 ? (
                <p>No messages yet.</p>
            ) : (
                <ul className="space-y-4">
                    {messages.map(msg => (
                        <li key={msg._id} className="border p-4 rounded shadow">
                            <p><strong>Name:</strong> {msg.name}</p>
                            <p><strong>Email:</strong> {msg.email}</p>
                            <p><strong>Message:</strong> {msg.message}</p>
                            <p className="text-sm text-gray-500">Sent at: {new Date(msg.createdAt).toLocaleString()}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default MessageList;
