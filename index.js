export default {
  async fetch(request) {
    if (request.method === "POST") {
      try {
        const data = await request.json();
        console.log("Pedido recibido:", data);
        return new Response(JSON.stringify({ ok:true }), { status:200 });
      } catch(err) {
        return new Response("Error al procesar JSON", { status:400 });
      }
    }
    return new Response("Método no permitido", { status:405 });
  }
}
