// app/page.tsx
export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Bienvenido a Consorcio App</h1>
      <p>Inicia sesión para acceder al panel de gestión.</p>
      <a href="/dashboard" style={{ color: "blue" }}>Ir al panel</a>
    </main>
  );
