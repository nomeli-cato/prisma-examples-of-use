import { PrismaClient} from "@prisma/client"

const prisma = new PrismaClient

export async function listarATodos() {
  const users = await prisma.user.findMany()
  console.log(users)
}

export class listingAll{
  static async findMany(){
    const users = await prisma.user.findMany()
    users.forEach((u)=> console.log(`${u.id} - ${u.name}`))
  }

  // Encuentra la primera coincidencia que encuentre de cualquier campo por el que busque
  static async findFirst() {
    const firstUser = await prisma.user.findFirst({
      where: {
        OR: [
          { id: 1 },
          {email: "mar@email.em"}
        ]
      }
    })
    console.log(firstUser);
  }

  static async deleteOne() {
    const userToDelete = await prisma.user.delete({
      where: {
        id: 1
      }
    })
    console.log(userToDelete);
  }

  static async deleteOneExceptions() {
    try {
      const userToDelete = await prisma.user.delete({
        where: {
          id: 1
        }
      })
      console.log(userToDelete);
      
    } catch (error) {
      console.log(error.message);
      console.log(error.code);
    }
  }
  static async deleteMany() {
    const usersToDelete = await prisma.user.deleteMany({
      where: {
        lastname: "contreras"
      }
    })
  }
  
  static async updateOneV1() {
    const userToUpdate = await prisma.user.update({
      where: {
        id: 5
      },
      data: {
        lastname: "Lirosa V2"
      }
    })
  }

  static async updateMany() {
    const usersToUpdate = await prisma.user.updateMany({
      where: {
        lastname: "torres"
      },
      data: {
        lastname: "Torres V2"
      }
    })
  }

  static async upsert() {
    const userToUpdateIfExist = await prisma.user.upsert({
      where: {
        email: "ferres@email.em"
      },
      // si no existe lo crea
      create: {
        name: "fernando",
        lastname: "duque",
        email: "ferfer@email.com.co",
        age: 33
      },
      update: {
        lastname: "Duque",
      },
    });
  }
}