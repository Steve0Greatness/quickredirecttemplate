# Quick Redirect Template
This is a template for quickly making redirect domains that redirect to the exact page that a user requests.

## Example
Say we want to create a redirect domain from `exampleredirect.net` to `example.com`, but we want to make it so that when you go to `exampleredirect.net/u/user` it brings you to `example.com/u/user`. We would go around doing this by using the code in `index.js` host it, and then point our CNAME for `exampleredirect.net` to the IP Address that it is hosted at.

## Usage
The usage is pretty easy, you simply use `index.js` but you replace `https://example.com` with your website's hostname(do not include any forward-slash(`/`) at the end). The port is by default `8080` but if you're already hosting something on that port, then change it to a port you aren't using.

## Requirements
What you need to run this:
1. Node.JS

This uses a built in library for Node: [`HTTP`](https://nodejs.org/api/http.html)  
If you don't have Node.JS then there's nothing I can really do.