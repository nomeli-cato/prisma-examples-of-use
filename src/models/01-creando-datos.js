import { PrismaClient } from "@prisma/client"
import { faker } from "@faker-js/faker"

const prisma = new PrismaClient()

async function creandoDatos(nombre, apellido, email, edad) {
  const newUser = await prisma.user.create({
    data: {
      name: nombre,
      lastname: apellido,
      email,
      age: edad,
      // tambiem puedo crear aqui un post o varios
      // post: {
      //   create: {
      //     title: faker.lorem.lines(2),
      //     content: faker.lorem.paragraphs()
      //   }
      // }
    }
  })

  await prisma.post.create({
    data: {
      title: faker.lorem.lines(2),
      content: faker.lorem.paragraphs(),
      // forma facil pero mas limitada
      // authorId: newUser.id
      author: {
        connect: {
          id: newUser.id
        }
      }
    }
  })
}



export default creandoDatos