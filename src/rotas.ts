import {Router} from 'express'
import AutorControlador from './controladores/AutorConstrolador'
import Postcontroladores from './controladores/PostControlador'

const rotas = Router()

//construimos um obejeto da classe AutorControlador
const autorControlador = new AutorControlador()
const Postcontrolador = new Postcontroladores()


rotas.get('/autores',autorControlador.listar)
rotas.get('/autores/:id',autorControlador.detalhar)
rotas.post('/autores',autorControlador.cadastrar)
rotas.put('/autores/:id',autorControlador.editar)
rotas.delete('/autores/id:', autorControlador.excluir)


rotas.get('/postagens',autorControlador.listar)
rotas.put('postagens/:id',Postcontrolador.detalhar)
rotas.post('/postagens',Postcontrolador.cadastrar)
rotas.patch('/postagens/id:', Postcontrolador.editar)
rotas.delete('/postagens/id:', Postcontrolador.excluir)





export default rotas