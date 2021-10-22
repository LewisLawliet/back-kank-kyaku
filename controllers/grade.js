import Prisma from '@prisma/client'
const { PrismaClient } = Prisma

const prisma = new PrismaClient()

export const createGrade = async(req, res)=> {
  const postGrade = await prisma.grade.create({
    data: {
      name: req.body.name,
      score: req.body.score,      
      userId: req.body.userId
      
        }
    }) .then(()=>{        
        res.status(201).json({message: "grade crée"})
        
    })

    .catch((error)=>{       
        res.status(400).json({error})
    })

    console.log(postGrade)
}  
 //createGrade()
 export const findAllGrades= async(req, res, next)=> {
    const getAll = await prisma.grade.findMany()
    .then((grade)=>{
        res.status(200).json({grade})
        
    })

    .catch((error)=>{
        console.log(error)
        res.status(400).json({error :error})
    })
    console.log(getAll)
}
 
 /*const f =async()=>{
 const result = await prisma.user.findUnique({
  where: { id: 18 },

  select: { grade: { select: { name: true } } },
})
console.log(result)
 }

 f()

 const g =async()=>{
  const result = await prisma.grade.findMany({
   where: { name: "empereur" },
 
   select: { user: { select: { name: true } } },
 })
 console.log(result)
  }
 
  g()*/