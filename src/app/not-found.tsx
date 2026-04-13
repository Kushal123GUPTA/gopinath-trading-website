export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '4rem', color: '#a85d45', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2c3e50' }}>Page Not Found</h2>
      <p style={{ color: '#7f8c8d', marginBottom: '2rem' }}>
        The page you are looking for does not exist.
      </p>
      <a
        href="/"
        style={{
          backgroundColor: '#a85d45',
          color: 'white',
          padding: '0.8rem 1.8rem',
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: '600'
        }}
      >
        Back to Home
      </a>
    </div>
  );
}
