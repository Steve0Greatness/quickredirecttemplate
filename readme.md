# Quick Redirect Template

This is a really small (and old) project that I don't think anyone does, will,
or has used.

If you don't know how to use this:

* Download the server file you need (denoserver.ts is for Deno, server.js is for
  Node and Bun)
* Change `example.com` to the domain you want to redirect to.
* Deploy.

## How this works

It takes the path given with the request and appends it to the URL you want to
redirect to. This could easily be written in anything.
