import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("https://demo-backend-production-66c8.up.railway.app/hello")
      .then(res => res.text())
      .then(setMsg)
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Demo Frontend</h1>
      <p>Backend says: {msg}</p>
    </div>
  );
}

export default App;

