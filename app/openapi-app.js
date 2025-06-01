import express from 'express';
import bodyParser from 'body-parser';
import {
  DefaultApi,
  ApiClient,
  GanttChartModelEvent,
  ScheduledTask,
  SerializableColor,
  EModelEvent
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

app.post('/api/mmi/schedule', (req, res) => {
  try {
    const body = req.body;

    const color = new SerializableColor(body.newTask.colour);

    const task = new ScheduledTask({
      id: body.newTask.id,
      name: body.newTask.name,
      groupName: body.newTask.groupName,
      startTime: body.newTask.startTime,
      endTime: body.newTask.endTime,
      colour: color
    });

    const modelEvent = new GanttChartModelEvent({
      modelEvent: body.modelEvent,
      oldTask: body.oldTask ? new ScheduledTask(body.oldTask) : null,
      newTask: task
    });

    console.log("Received Event:", modelEvent);

    // You can call another API here if needed
    // api.submitScheduleEvent(modelEvent)

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
