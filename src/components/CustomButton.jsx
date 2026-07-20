function CustomButton({ text, onClick, bgColor }) {
  return (
    <button 
      onClick={onClick}
      style={{ 
        padding: '12px 24px', 
        fontSize: '16px', 
        cursor: 'pointer', 
        borderRadius: '8px', 
        backgroundColor: bgColor, // لون الخلفية هنا بقى ديناميكي متغير!
        color: 'white', 
        border: 'none', 
        fontWeight: 'bold',
        transition: 'transform 0.1s ease',
      }}
      onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'}
      onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
    >
      {text}
    </button>
  );
}

export default CustomButton;