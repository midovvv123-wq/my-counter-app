import { useState } from 'react';
import Header from './components/Header';
import CounterDisplay from './components/CounterDisplay';
import CustomButton from './components/CustomButton'; // استدعاء الزرار الذكي الجديد

function App() {
  const [score, setScore] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '70px', fontFamily: 'Arial, sans-serif' }}>
      
      <Header />

      <CounterDisplay value={score} />

      {/* هنا بنستدعي نفس المكون 3 مرات بشكل نظيف جداً وبألوان ووظائف مختلفة */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
        
        <CustomButton 
          text="زيادة (+)" 
          onClick={() => setScore(score + 1)} 
          bgColor="#3498db" 
        />

        <CustomButton 
          text="تصفير (Reset)" 
          onClick={() => setScore(0)} 
          bgColor="#95a5a6" 
        />

        <CustomButton 
          text="نقصان (-)" 
          onClick={() => setScore(score - 1)} 
          bgColor="#e74c3c" 
        />

      </div>
    </div>
  );
}

export default App;