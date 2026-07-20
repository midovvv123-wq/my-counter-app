function CounterDisplay({ value }) {
  // تحديد اللون بناءً على قيمة العداد (شغل محترفين!)
  let badgeColor = '#95a5a6'; // اللون الافتراضي (رمادي للصفر)
  let badgeBg = '#f4f6f6';

  if (value > 0) {
    badgeColor = '#2ecc71'; // أخضر للموجب
    badgeBg = '#e8f8f5';
  } else if (value < 0) {
    badgeColor = '#e74c3c'; // أحمر للسالب
    badgeBg = '#fce4d6';
  }

  return (
    <div style={{ margin: '30px', fontSize: '32px', fontWeight: 'bold', transition: 'all 0.3s ease' }}>
      العداد الذكي: 
      <span style={{ 
        color: badgeColor, 
        backgroundColor: badgeBg, 
        padding: '5px 15px', 
        borderRadius: '8px',
        marginLeft: '10px',
        display: 'inline-block',
        transition: 'all 0.3s ease' // حركة ناعمة أثناء تحول الألوان
      }}>
        {value}
      </span>
    </div>
  );
}

export default CounterDisplay;