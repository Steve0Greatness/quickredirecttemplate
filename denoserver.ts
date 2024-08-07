Deno.serve({ port: 80 }, (r: Request): Response => {
    return new Response("", {
        status: 301,
        headers: {
            Location: "https://example.com" + new URL(r.url).pathname
        }
    });
});
