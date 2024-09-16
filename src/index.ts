import 'dotenv/config'
import express, { json } from 'express'

const app = express()

app.use(express.json())

app.get('/', (req,res)=>{
    res.json('ok')

})

app.listen(process.env.PORT,()=>{
    console.log('Servidor Inicializado')
    
})
