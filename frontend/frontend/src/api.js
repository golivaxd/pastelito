export const login = async (correo, password) => {
  try {
    const res = await fetch("https://pastelito.onrender.com/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correo, password }),
    });

    if (!res.ok) throw new Error("Credenciales incorrectas");
    const data = await res.json();
    localStorage.setItem("token", data.token);
    return data;
  } catch (err) {
    console.error("❌ Error al iniciar sesión:", err);
    return null;
  }
};

  