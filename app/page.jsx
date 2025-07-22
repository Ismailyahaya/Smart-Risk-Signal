export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8f8f8",
      }}
    >
      <h1 style={{ color: "green", fontWeight: "bold", fontSize: "2em" }}>
        Smart Risk Signal
      </h1>
      <p style={{ marginBottom: "20px" }}>Welcome to your homepage!</p>
      <button
        style={{
          marginTop: "10px",
          marginBottom: "30px",
          padding: "12px 25px",
          fontSize: "1.1rem",
          fontWeight: "bold",
          backgroundColor: "#fff",
          color: "green",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => alert("Clicked!")}
      >
        Get Started
      </button>
    </main>
  );
}
