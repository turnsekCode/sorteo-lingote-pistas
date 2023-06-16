export const sendContactBd = async (data) =>
  fetch("https://quickgold.es/sorteo-lingote/api/bd", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json,",
    },
  }).then((res) => {
    if (!res.ok) throw new Error("error al enviar mensaje, base de datos");
    return res.json();
  });
