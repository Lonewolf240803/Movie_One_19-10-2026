import Header from './components/Header';
import Product from './components/Product';
import { db } from './data/db';

function App() {
  return (
    <div style={{ backgroundColor: '#fcfbf8', minHeight: '100vh', paddingBottom: '50px' }}>
      <Header />
      
      <main style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '40px' }}>
        <h2 
          style={{ 
            color: '#b08d57', 
            letterSpacing: '2px', 
            fontSize: '2rem', 
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: '40px'
          }}
        >
          EQUIPO DE COMBATE
        </h2>

        {/* CONTENEDOR HORIZONTAL (GRID) */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', /* 3 columnas horizontales del mismo tamaño */
          gap: '30px', /* Espacio entre tarjetas */
          padding: '0 20px'
        }}>
          {db.map((product) => (
            <Product 
              key={product.id} 
              product={product} 
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;