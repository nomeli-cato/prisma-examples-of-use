import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function creandoDatos(nombre, apellido, email, edad) {
  const newUser = await prisma.user.create({
    data: {
      name: nombre,
      lastname: apellido,
      email,
      age: edad
    }
  })
}

export default creandoDatos