export default {
  async fetch(request) {
    const incomingUrl = new URL(request.url);

    // Rewriting interactions with the backend
    const target = new URL(request.url);
    target.hostname = "139.59.15.151";
    target.port = "7002";
    target.protocol = "http:"; // backend only supports HTTP

    // Forward request
    const response = await fetch(target.toString(), {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: "follow"
    });

    // Clone + apply CORS
    const newHeaders = new Headers(response.headers);
    newHeaders.set("Access-Control-Allow-Origin", "*");
    newHeaders.set("Access-Control-Allow-Headers", "*");
    newHeaders.set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    });
  }
};
