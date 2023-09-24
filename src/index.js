import creandoDatos from "./models/01-creando-datos.js"
import {listingAll} from "./models/02-alterando-datos.js"

async function main() {
  // await creandoDatos("zandor","contreras","lilit@email.em", 105)
  // await creandoDatos("lucas","miran","lumi@email.em", 35)
  // await creandoDatos("isabel","lirosa","isali@email.em", 25)
  // await creandoDatos("fernando","torres","ferres@email.em", 21)
  listingAll.deleteOne()
}

main()