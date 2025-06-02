const WebSocket = require('ws');
const fs = require('fs');

const PORT = 8001;
const HEARTBEAT_INTERVAL = 10000;

const wss = new WebSocket.Server({ port: PORT });

console.log(`WebSocket server started on ws://localhost:${PORT}`);

// Send heartbeat to a client
function sendHeartbeat(ws, jsonData) {
    if (ws.readyState === WebSocket.OPEN) {
        // Send a JSON file from the ./data directory
        ws.send(jsonData.toString());
    }
}

// Handle new client connections
wss.on('connection', (ws) => {
    console.log('Client connected.');

    // Start sending heartbeat
    sendHeartbeat(ws,fs.readFileSync('./data/task.json'));

    setTimeout(() => {
        sendHeartbeat(ws,fs.readFileSync('./data/task2.json'));
    }, 10000);

    ws.on('message', (msg) => {
        console.log(`Received: ${msg}`);
    });

    ws.on('close', () => {
        clearInterval(heartbeat);
        console.log('Client disconnected.');
    });

    ws.on('error', (err) => {
        console.error('WebSocket error:', err);
    });
});
