import { useEffect, useState } from "react";

const ProtectedPage = () => {
  const [info, setInfo] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("https://pastelito.onrender.com/api/perfil", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setInfo(data.mensaje));
  }, []);

  return <div>{info}</div>;
};

export default ProtectedPage;
