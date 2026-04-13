'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
          padding: '2rem',
          fontFamily: 'sans-serif'
        }}>
          <h1 style={{ fontSize: '3rem', color: '#a85d45', marginBottom: '1rem' }}>Something went wrong</h1>
          <p style={{ color: '#7f8c8d', marginBottom: '2rem' }}>
            An unexpected error occurred. Please try again.
          </p>
          <button
            onClick={() => reset()}
            style={{
              backgroundColor: '#a85d45',
              color: 'white',
              padding: '0.8rem 1.8rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '1rem',
              marginBottom: '1rem'
            }}
          >
            Try Again
          </button>
          <a
            href="/"
            style={{
              color: '#a85d45',
              textDecoration: 'underline',
              fontWeight: '500'
            }}
          >
            Back to Home
          </a>
        </div>
      </body>
    </html>
  );
}
