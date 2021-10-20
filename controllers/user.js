import Prisma from '@prisma/client'
const { PrismaClient } = Prisma
import bcrypt from  "bcrypt"
import jwt from  "jsonwebtoken"


const prisma = new PrismaClient()

  const findAllUsers= async()=> {
    const getAll = await prisma.user.findMany()
    console.log(getAll)
}

findAllUsers()


  const findOneUser= async()=> {
    const getOne = await prisma.user.findUnique({
        where: {
          id: 1,
        },
      })
      console.log(getOne)
  }
  
  
  export const createUser= async(req,res)=> {
    bcrypt.hash(req.body.password, 10)	
	.then(async(hash)=>{
    const post = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: hash
          }
      })
			
		})
    /*const post = await prisma.user.create({
        data: {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
            }
        })*/
        .then(()=>{
          res.status(201).json({message: "user crée"})
      })
  
      .catch((error)=>{
          console.log(error)
          res.status(400).json({error :error})
      })
        
    }

    export const log = async(req,res)=> {
      const getOne = await prisma.user.findUnique({
        where: {          
           email: req.body.email,
           name: req.body.name
        },
      })
      .then((user)=>{
        if(!user){
          console.log("not found")
          return res.status(401).json({message: "Utilisateur non trouvé"})
          
        }
    
        bcrypt.compare(req.body.password, user.password)
        .then((valid)=>{
          if(!valid){
            console.log("not correct")
            return res.status(401).json({message: "Mot de passe incorrect"})
          }
    
          res.status(200).json({
            userId: user.id,
            token: jwt.sign(
              {userId: user.id},					
              process.env.KEY,									
              {expiresIn: "3h"}
              
            )            
          })
          
          console.log("Yes,connexion réussie bro !")
          
        })
        .catch((error)=>{
          console.log("finduser problème")
          res.status(500).json({error})
        })
    
      })
      .catch((error)=>{
        console.log("compare problème")
        res.status(500).json({error})
      })
      }  
   
        export const updateUser =async()=> {
            const patch = await prisma.user.update({
              where: { id: 1 },
              data: { email: "marie-alice@gmail.com" },
            })
            console.log(patch)
        }
        
        export const eraseUser = async()=>{
            const erase = await prisma.user.delete({
                where: { id: 3 },
              })
          console.log(erase)
        }

  /*.catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })*/        