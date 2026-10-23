export default function Header() {
  return (
    <header style={{ 
      backgroundColor: '#3a3532', 
      color: 'white', 
      borderBottom: '2px solid #b08d57',
      padding: '15px 0'
    }}>
      {/* Contenedor principal con FLEXBOX para forzar la línea horizontal */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 20px',
        display: 'flex', 
        justifyContent: 'space-between', /* Separa los 3 bloques equitativamente */
        alignItems: 'center' /* Centra verticalmente */
      }}>
        
        {/* BLOQUE 1: Izquierda (Logo y Título) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ 
            width: '50px', 
            height: '50px', 
            border: '2px solid #b08d57', 
            borderRadius: '50%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            color: '#b08d57',
            fontWeight: 'bold',
            fontSize: '1.2rem'
          }}>
            WB
          </div>
          <div>
            <h1 style={{ margin: 0, fontSize: '1.5rem', fontFamily: 'cursive', color: '#b08d57' }}>Wolfbox</h1>
            <p style={{ margin: 0, fontSize: '0.6rem', letterSpacing: '2px' }}>ESPÍRITU DE CAMPEÓN</p>
          </div>
        </div>

        {/* BLOQUE 2: Centro (Enlaces de navegación horizontal) */}
        <nav>
          <ul style={{ 
            display: 'flex', /* Esto pone la lista en horizontal */
            listStyle: 'none', 
            margin: 0, 
            padding: 0, 
            gap: '30px', 
            fontSize: '0.85rem', 
            letterSpacing: '1px' 
          }}>
            <li style={{ cursor: 'pointer' }}>INICIO</li>
            <li style={{ cursor: 'pointer' }}>SOBRE NOSOTROS</li>
            <li style={{ cursor: 'pointer' }}>COLECCIONES</li>
            <li style={{ cursor: 'pointer' }}>CONTACTO</li>
          </ul>
        </nav>

        {/* BLOQUE 3: Derecha (Iconos horizontales) */}
        <div style={{ 
          display: 'flex', /* Esto pone los iconos en horizontal */
          gap: '20px', 
          fontSize: '1.2rem' 
        }}>
          <span style={{ cursor: 'pointer' }}>♡</span>
          <span style={{ cursor: 'pointer' }}>📍</span>
          <span style={{ cursor: 'pointer' }}>👤</span>
          <span style={{ cursor: 'pointer' }}>🛍️</span>
        </div>
        
      </div>
    </header>
  );
}