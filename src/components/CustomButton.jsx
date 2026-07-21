function CustomButton({ text, onClick }) {
  return (
    <button 
      onClick={onClick} 
      style={{
        padding: '10px 20px',
        fontSize: '18px',
        margin: '5px',
        backgroundColor: '#007bff',
        color: '#ffffff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      {text}
    </button>
  );
}

export default CustomButton;