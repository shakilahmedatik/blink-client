const express = require('express')
const next = require('next')
const { createProxyMiddleware } = require('http-proxy-middleware')

const dev = process.env.NODE_ENV
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()
    // apply proxy in dev mode
    if (dev) {
      server.use(
        '/api',
        createProxyMiddleware({
          target: 'https://blink-lms.herokuapp.com',
          changeOrigin: true,
        })
      )
    }

    server.all('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on https://blink-lms.herokuapp.com/')
    })
  })
  .catch(err => {
    console.log('Error', err)
  })
