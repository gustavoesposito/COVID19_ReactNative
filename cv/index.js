const { response } = require('express')
const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const server = express()

server.get('/', (req,res) => {
    return res.json({mensagem: 'Nossa API esta on...'})
})

server.listen(3000, () => {
    console.log('servidor on...')
})