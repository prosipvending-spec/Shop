export default {
  async fetch(request, env, ctx) {

    if (request.method !== "POST") {
      return new Response("Método no permitido", { status: 405 });
    }

    const url = new URL(request.url);
    if (url.pathname !== "/pedido") {
      return new Response("No encontrado", { status: 404 });
    }

    try {
      const pedido = await request.json();

      // Aquí luego conectaremos a proveedores (DSers o API directa)
      console.log("🛒 Pedido recibido:", pedido);

      return new Response(
        JSON.stringify({
          ok: true,
          mensaje: "Pedido recibido correctamente"
        }),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      );

    } catch (err) {
      return new Response(
        JSON.stringify({ error: "JSON inválido" }),
        { status: 400 }
      );
    }
  }
};
