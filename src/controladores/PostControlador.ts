import { json, Request,Response } from "express";
import { autores,posts } from "../modelos/bancoDeDados";
import Autor from "../modelos/Autor";
import Post from "../modelos/Post";




export default class Postcontroladores{
  listar(req:Request,res:Response){
   
          return res.json(posts)
    }

 
    detalhar(req:Request,res:Response){

  const {id} = req.params

  const post = posts.find((elemnto)=>{
    return elemnto.id === id
  })
   if(!post){
    return res.status(404).json({
      mensagem:"A postagem não existe"
    })
   } 

   return res.json(post)

}

cadastrar(req:Request,res:Response){

  const {titulo,descricao,autor_id} = req.body

  if(!titulo||descricao||autor_id){
    res.status(400).json({
      mensagem:"Todos os Campos da postagem são obrigatorios"
    })
  }

  const autor = autores.find(elemeto => {
    return elemeto.id === autor_id

  }) 
  if(!autor){
    return res.status(404).json({
      mensagem:"O Autor não existe"
    })
   }    

   const post = new Post({
    titulo,
    descricao,
    autor
   })

   return res.status(201).json(post)


}


editar(req:Request,res:Response){
   const {id} = req.params
   const {titulo,descricao} =req.body


   if(!titulo||descricao){
    res.status(400).json({
      mensagem:"O titulo e a Descrição da postagem são obrigatorios"
    })
  }

   const post = posts.find((elemento)=>{
    return elemento.id === id
  })
   if(!post){
    return res.status(404).json({
      mensagem:"A postagem não existe"
    })
   } 

     post.titulo = titulo
     post.descricao = descricao

      

     return res.status(204).send

}

excluir(req:Request,res:Response){

  const{id} = req.params
  
  const postIndice = posts.findIndex((elemnto)=>{
      return elemnto.id === id
  })

  if(postIndice === -1){
      return res.status(404).json({   mensagem:'Autor não encontrado'  }) 
  }

   posts.splice(postIndice,1)

   return res.status(204).send

}


}
