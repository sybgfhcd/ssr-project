const server = require('express')()

// fs获取页面模板html文件
const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./public/index.html', 'utf-8')
})

server.get('*', (req, res) => res.send('这是404接口返回的默认数据'))

server.get('*', (req, res) => {
    const context = {
        title: 'hello world'
    }

    renderer.renderToString('', context, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return
        }
        // 接口获取到的html数据
        res.end(`${html}`)
    })
})



server.listen(8080)