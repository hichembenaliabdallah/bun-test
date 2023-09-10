Bun.serve({
  port: 8000,
  fetch(req) {
    return new Response("Running on 8000");
  },
});
