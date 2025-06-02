import express from 'express';
import bodyParser from 'body-parser';
import {
  DefaultApi,
  ApiClient,
  GanttChartModelEvent,
  ScheduledTask,
} from '../codegen/src/index.js';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';

const app = express();
app.use(bodyParser.json());

const apiClient = new ApiClient();
apiClient.basePath = 'http://localhost:3000'; // Optional, used if DefaultApi sends requests itself

const api = new DefaultApi(apiClient);

// Load OpenAPI spec
const swaggerDocument = JSON.parse(fs.readFileSync('./data/test_openapi.json', 'utf8'));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/', (req, res) => {
  res.redirect('/docs');
});
app.post('/api/mmi/schedule', (req, res) => {
  try {
    const { payload } = req.body;
    if (!payload.modelEvent) {
      throw new Error('modelEvent is required');
    }
    const modelEvent = new GanttChartModelEvent({
      modelEvent: payload.modelEvent,
      oldTask: payload.oldTask ? ScheduledTask.constructFromObject(payload.oldTask) : null,
      newTask: payload.newTask ? ScheduledTask.constructFromObject(payload.newTask) : null,
    });

    console.log("Received Event:", JSON.stringify(modelEvent));

    res.status(200).json({ message: "Event received successfully." });
  } catch (err) {
    console.error("Error handling request:", err);
    res.status(400).json({ error: err.message });
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
