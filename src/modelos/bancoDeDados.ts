import Autor from "./Autor"
import Post from "./Post"



export const autores:Autor[]=[
 new Autor ({
    nome:'Felipe',
    idade:26
 })
]


export const posts: Post[] = [
   new Post({
      titulo: 'Meu Primeiro Post',
      descricao:'Descrição do meu primeiro post',
      autor: new Autor({
         nome:'Guido',
         idade:33
      })
    
   })

]
