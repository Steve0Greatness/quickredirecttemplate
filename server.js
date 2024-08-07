require("http").createServer((q, s) => {
    s.writeHead(301, { Location: "https://example.com" + q.url });
    s.end();
}).listen(80);
