export default function Product({ product }) {
  const { name, image, price } = product;

  return (
    <div style={{ 
      backgroundColor: '#fbfaf6', 
      border: '1px solid #eae5d9', 
      borderRadius: '12px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      
      {/* Imagen */}
      <img 
        src={`/img/${image}.jpg`} 
        alt={name} 
        style={{ width: '100%', height: '280px', objectFit: 'cover' }}
      />
      
      {/* Información y botón */}
      <div style={{ 
        padding: '20px', 
        textAlign: 'center', 
        display: 'flex', 
        flexDirection: 'column', 
        flexGrow: 1, 
        justifyContent: 'flex-end' 
      }}>
        <h5 style={{ 
          fontSize: '1rem', 
          letterSpacing: '1px', 
          textTransform: 'uppercase', 
          fontWeight: 'bold', 
          margin: '10px 0' 
        }}>
          {name}
        </h5>
        
        <p style={{ 
          color: '#b08d57', 
          fontSize: '1.25rem', 
          fontWeight: 'bold', 
          margin: '0 0 20px 0' 
        }}>
          MXN {price.toFixed(2)}
        </p>
        
        <button 
          style={{ 
            backgroundColor: '#1a1a1a', 
            color: 'white',
            border: 'none',
            textTransform: 'uppercase', 
            fontSize: '0.85rem', 
            padding: '12px 0',
            width: '100%',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          AGREGAR AL CARRITO
        </button>
      </div>
    </div>
  );
}