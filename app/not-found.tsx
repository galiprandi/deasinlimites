export default function NotFound() {
  return (
    <div style={{ 
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "70vh",
      padding: "2rem",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "3rem", margin: "1rem 0" }}>404</h1>
      <h2 style={{ fontSize: "1.5rem", margin: "1rem 0" }}>Página no encontrada</h2>
      <p style={{ margin: "1rem 0", maxWidth: "600px" }}>
        Lo sentimos, la página que buscas no existe.
      </p>
      
      <div style={{ margin: "2rem 0" }}>
        <a href="/" style={{ 
          display: "inline-block", 
          padding: "0.5rem 1rem", 
          backgroundColor: "#fdb344", 
          color: "white", 
          textDecoration: "none", 
          borderRadius: "0.5rem",
          margin: "0.5rem"
        }}>
          Volver al inicio
        </a>
      </div>
    </div>
  );
}
