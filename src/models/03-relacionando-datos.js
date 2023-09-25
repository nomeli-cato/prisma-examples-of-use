import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient

export default class relacionandoDatos{
  static async findManyWithPost() {
    const userWithPost = await prisma.user.findMany(
      {
        include: {
        post: true
      }}
    )

    userWithPost.forEach(user => {
      console.log("-----------------------");
      console.log(`${user.name} ${user.lastname}`);
      user.post.forEach(post => {
        console.log(post.title);
      })
      
    })
  }
}