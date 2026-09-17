import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import healthRouter from './routes/health.js';
import aiRouter from './routes/ai.js';

const app = express();
const port = Number(process.env.PORT || 3001);

const allowedOrigins = String(process.env.FRONTEND_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((value) => value.trim())
  .filter(Boolean);

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes('*') || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Origin tidak diizinkan oleh CORS.'));
    }
  }
}));
app.use(express.json({ limit: '1mb' }));

app.get('/', (_req, res) => res.json({
  name: 'Bagas Arya Wijaya Portfolio API',
  status: 'ok',
  endpoints: ['/api/health', '/api/ai/track', '/api/ai/metrics']
}));

app.use('/api/health', healthRouter);
app.use('/api/ai', aiRouter);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error.' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`API running on http://localhost:${port}`);
});
