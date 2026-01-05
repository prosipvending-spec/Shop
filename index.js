addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': 'http://shop.prosipvending.shop',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  }

  if(request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  if(request.method === 'POST' && request.url.endsWith('/pedido')) {
    try{
      const data = await request.json()
      console.log('Pedido recibido:', data)

      return new Response(
        JSON.stringify({ status:"ok", message:"Pedido recibido correctamente" }),
        { headers:{...corsHeaders, 'Content-Type':'application/json'} }
      )
    } catch(err){
      return new Response(
        JSON.stringify({ status:"error", message:"Error al procesar el pedido" }),
        { headers:{...corsHeaders,'Content-Type':'application/json'}, status:400 }
      )
    }
  }

  return new Response('Método no permitido',{status:405, headers:corsHeaders})
}

