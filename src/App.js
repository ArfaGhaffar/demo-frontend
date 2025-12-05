import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:9090/hello")
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

