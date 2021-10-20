/*import Prisma from '@prisma/client'
const { PrismaClient } = Prisma


const prisma = new PrismaClient()

  const findAllUsers= async()=> {
    const getAll = await prisma.user.findMany()
    console.log(getAll)
}

//findAllUsers()


  const findOneUser= async()=> {
    const getOne = await prisma.user.findUnique({
        where: {
          id: 1,
        },
      })
      console.log(getOne)
  }
  
  
  export const createUser= async()=> {
    const post = await prisma.user.create({
        data: {
          name: req.body.name,
          email: req.body.email,
          password: "yu"
            }
        })
        console.log(post)
    }
   //createUser()
   
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