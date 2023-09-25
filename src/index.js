import creandoDatos from "./models/01-creando-datos.js"
import { listingAll } from "./models/02-alterando-datos.js"
import relacionandoDatos from "./models/03-relacionando-datos.js"

async function main() {
  // await creandoDatos("micael","contreras","caelreas@email.em", 250)
  // await creandoDatos("sara","torres","torres@email.em", 35)
  // await creandoDatos("alejandro","torres","alejrres@email.em", 25)
  // await creandoDatos("clara","torres","cltorres66@email.em", 66)
  
  relacionandoDatos.findManyWithPost()
}

main()