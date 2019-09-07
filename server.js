const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

server.get('*', (req, res) => {
    const app = new Vue({
        data: {
            url: req.url
        },
        template: `<div>访问的 URL 是： {{ url }}</div>`
    })

    res.setHeader('Content-Type','text/html;charset=UTF-8'); // 避免乱码
    renderer.renderToString(app, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return
        }
        res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Hello World</title></head>
        <body>${html}</body>
      </html>
    `)
    })
})

server.listen(8080)