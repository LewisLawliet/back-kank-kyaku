import Prisma from '@prisma/client'
import { query } from 'express'
const { PrismaClient } = Prisma
//import { createQuestion } from './question.js'
//import { createCategorie } from './categorie.js'

const prisma = new PrismaClient()

export const createQuiz = async(req, res)=> {
    const postGrade = await prisma.quiz.create({
      data: {
        name: req.body.name,
        questionId: req.body.questionId,
        categorieId: req.body.categorieId,
        scoreId: req.body.scoreId,
        gradeId: req.body.gradeId

        /*include:{
                question:{
                    number: req.body.number,
                    question: req.body.question
                } 
            },*/
        
    
        
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
  
  //createQuiz()

  export const findAllQuiz= async(req, res, next)=> {
    const getAll = await prisma.quiz.findMany()
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
  