export default function Saludo({ nombre }) {
  return (
    <div>
      <h2 style={{ color: '#fff', fontWeight: 700, fontFamily: 'Montserrat, Poppins, sans-serif', fontSize: '2rem', margin: 0 }}>
        Hola {nombre} y bienvenido
      </h2>
    </div>
  );
}