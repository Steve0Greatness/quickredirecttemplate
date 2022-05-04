require("http").createServer((q, s) => {
    s.writeHead(303, { Location: "https://example.com" + q.url });
    s.end();
}).listen(8080);