import { fork } from 'child_process';
import express from 'express';
import * as Types from './types';

const app = express();

app.get('/process-name-delay', async (req, res) => {
  const name = req.query.name;

  if (!name) {
    res.status(400);
    res.json({
      error: 'No name query provided',
    });
  }

  const childProcess = fork(`${__dirname}/processName.ts`);
  const startTime = new Date();

  childProcess.send({ name });
  childProcess.on('message', (processedName: Types.ChildProcessNameDelay) => {
    const endTime = new Date();

    res.json({
      ...processedName,
      time: endTime.getTime() - startTime.getTime() + 'ms',
    });
  });
});

app.get('/unblocked-process', (_req, res) => {
  res.json({ message: 'I am able to be processed without being blocked' });
});

app.listen(3000, () => console.log('listening on port 3000'));
