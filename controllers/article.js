import Prisma from '@prisma/client'
const { PrismaClient } = Prisma

const prisma = new PrismaClient()

export const createArticle = async(req, res)=> {
    const postGrade = await prisma.article.create({
      data: {
        title: "sega",
        content:" bla bla bla ...",      
        userId: 14
        
          }
      }) /*.then(()=>{        
          res.status(201).json({message: "Article crée"})
          
      })
  
      .catch((error)=>{       
          res.status(400).json({error})
      })*/
      .catch((e) => {
        throw e
      })
      .finally(async () => {
        await prisma.$disconnect()
      })
  
      console.log(postGrade)
  }
  
  createArticle()