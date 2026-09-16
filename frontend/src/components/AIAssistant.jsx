import { useState, useEffect } from 'react';
import { Bot, X, Activity } from 'lucide-react';
import axios from 'axios';

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [metrics, setMetrics] = useState(null);
  const [tips, setTips] = useState('Halo! Saya asisten AI yang memantau website ini secara real-time.');

  useEffect(() => {
    // Heartbeat: kirim aktivitas visitor ke backend
    axios.post('/api/ai/track', {
      page: window.location.pathname,
      ua: navigator.userAgent,
      ts: Date.now(),
    }).catch(() => {});

    const interval = setInterval(async () => {
      try {
        const { data } = await axios.get('/api/ai/metrics');
        setMetrics(data);
        if (data.tip) setTips(data.tip);
      } catch {}
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-sky-500 text-white shadow-xl shadow-sky-400/50 hover:bg-sky-600 transition-all animate-glow"
        aria-label="AI Assistant"
      >
        {open ? <X size={22} /> : <Bot size={22} />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 glass rounded-2xl shadow-2xl p-4 border border-sky-200">
          <div className="flex items-center gap-2 mb-3">
            <Activity className="text-sky-500" size={18} />
            <h3 className="font-bold text-sky-900">AI Monitor</h3>
            <span className="ml-auto text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">● Live</span>
          </div>
          <p className="text-sm text-sky-800 mb-3">{tips}</p>
          {metrics && (
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-sky-50 rounded-lg p-2">
                <p className="text-sky-600">Visitors</p>
                <p className="font-bold text-sky-900">{metrics.visitors}</p>
              </div>
              <div className="bg-sky-50 rounded-lg p-2">
                <p className="text-sky-600">Uptime</p>
                <p className="font-bold text-sky-900">{metrics.uptime}%</p>
              </div>
              <div className="bg-sky-50 rounded-lg p-2">
                <p className="text-sky-600">Response</p>
                <p className="font-bold text-sky-900">{metrics.responseTime}ms</p>
              </div>
              <div className="bg-sky-50 rounded-lg p-2">
                <p className="text-sky-600">Health</p>
                <p className="font-bold text-green-600">{metrics.health}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}