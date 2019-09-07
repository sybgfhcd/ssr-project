const Vue = require('vue')
const server = require('express')()

// fs获取页面模板html文件
const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./public/index.template.html', 'utf-8')
})

// server.get('*', (req, res) => res.send('<h1>this is a fat-server project</h1>'))

server.get('*', (req, res) => {
    const app = new Vue({
        data: {
            url: req.url
        },
        template: `<div>访问的 URL 是： {{ url }}</div>`
    })
    const context = {
        title: 'hello world'
    }

    renderer.renderToString(app, context, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return
        }
        // 接口获取到的html数据
        res.end(`${html}`)
    })
})



server.listen(8080)