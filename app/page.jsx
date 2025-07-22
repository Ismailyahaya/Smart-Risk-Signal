```jsx
export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: 'green',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px'
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>
        Smart Risk Signal
      </h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '30px', fontStyle: 'italic' }}>
        Secure your future, secure your life!
      </p>
      <button style={{
        marginTop: '10px',
        marginBottom: '30px',
        padding: '12px 25px',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        backgroundColor: '#fff',
        color: 'green',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        
      </button>
      <section style={{
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: '20px 30px',
        borderRadius: '10px',
        maxWidth: '500px',
        textAlign: 'center'
      }}>
        <h2 style={{ marginTop: 0 }}>About</h2>
        <p>
          Smart Risk Signal is an innovative app designed to help you make safe and smart decisions every day. Stay ahead and be informed!
        </p>
      </section>
    </main>
  );
}
```
