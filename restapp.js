const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Sample REST API controller: POST /api/ws/send
app.post('/api/mmi/schedule', (req, res) => {
    const data = req.body;

    // Log the payload
    console.log('Received JSON:', data);

    // Example: validate or forward the data to WebSocket
    // sendToWebSocket(JSON.stringify(data)); // placeholder

    res.status(200).json({ message: 'Message received and processed' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`REST API server running at http://localhost:${PORT}`);
});
