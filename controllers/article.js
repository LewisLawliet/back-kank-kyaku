import Prisma from '@prisma/client'
const { PrismaClient } = Prisma

const prisma = new PrismaClient()

export const createArticle = async(req, res)=> {
    const postGrade = await prisma.article.create({
      data: {
        title: req.body.title,
        content: req.body.content,      
        userId: req.body.userId
        
          }
      }) .then(()=>{        
          res.status(201).json({message: "Article crée"})
          
      })
  
      .catch((error)=>{       
          res.status(400).json({error})
      })
      /*.catch((e) => {
        throw e
      })
      .finally(async () => {
        await prisma.$disconnect()
      })*/
  
      console.log(postGrade)
  }
  
  //createArticle()

  export const findAllArticles= async(req, res, next)=> {
    const getAll = await prisma.article.findMany()
    .then((grade)=>{
        res.status(200).json({grade})
        
    })

    .catch((error)=>{
        console.log(error)
        res.status(400).json({error :error})
    })
    console.log(getAll)
}

const f =async()=>{
    const result = await prisma.user.findUnique({
     where: { id: 18 },
   
     select: { articles: { select: { title: true } } },
   })
   console.log(result)
    }
   
    f()