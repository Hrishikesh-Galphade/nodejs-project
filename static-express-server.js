var express = require('express')

const app = express()

app.use(express.urlencoded({extended:true}))

app.use(express.static('./public'))

app.post('/login',(request,response)=>{
        console.log(request.body.emailAddress)
        console.log(request.body.password)
})

app.get('/login',(request,response)=>{
    console.log('recieved get request to login')
    response.end()
})

app.listen(8080)

