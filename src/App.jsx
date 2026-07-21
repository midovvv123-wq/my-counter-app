import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CounterDisplay from './components/CounterDisplay';
import CustomButton from './components/CustomButton';

function App() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount !== null ? Number(savedCount) : 0;
  });
  
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  const handleIncrement = () => {
    const newCount = count + step;
    setCount(newCount);
    setHistory(prev => [newCount, ...prev.slice(0, 4)]); // الاحتفاظ بآخر 5 عمليات
  };

  const handleDecrement = () => {
    const newCount = count - step;
    setCount(newCount);
    setHistory(prev => [newCount, ...prev.slice(0, 4)]);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <Header />
      <CounterDisplay value={count} />

      <div style={{ margin: '20px' }}>
        <CustomButton text={`-${step}`} onClick={handleDecrement} />
        <CustomButton text={`+${step}`} onClick={handleIncrement} />
      </div>

      <div style={{ marginTop: '20px' }}>
        <p style={{ color: '#555' }}>اختر مقدار التغيير:</p>
        <button onClick={() => setStep(1)} style={{ margin: '5px', padding: '8px 15px', cursor: 'pointer' }}>1</button>
        <button onClick={() => setStep(5)} style={{ margin: '5px', padding: '8px 15px', cursor: 'pointer' }}>5</button>
        <button onClick={() => setStep(10)} style={{ margin: '5px', padding: '8px 15px', cursor: 'pointer' }}>10</button>
      </div>

      {/* سجل العمليات الاحترافي */}
      <div style={{ marginTop: '30px' }}>
        <h4 style={{ color: '#333' }}>سجل العمليات الأخيرة:</h4>
        <div style={{ display: 'inline-block', background: '#f8f9fa', padding: '10px 20px', borderRadius: '8px', border: '1px solid #ddd' }}>
          {history.length === 0 ? (
            <p style={{ color: '#888', margin: 0 }}>لا توجد عمليات سجّلت بعد</p>
          ) : (
            history.map((item, index) => (
              <span key={index} style={{ margin: '0 10px', fontWeight: 'bold', color: '#007bff' }}>
                [{item}]
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;