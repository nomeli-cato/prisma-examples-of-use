# Comentarios de todo lo necesitado en este curso


[Prisma Oficcial Page](https://www.prisma.io/docs)

- iniciar prisma
  
      npx prisma init

- iniciando prisma para que la base de datos predeterminado sea sqlite

      npx prisma init --datasource-provider sqlite

  - [Data Sources](https://www.prisma.io/docs/concepts/components/prisma-schema/data-sources)


## Model
- Se crea el modelo en schema.prisma
- Luego crear migracion:

      npx prisma migrate dev

- Creara una carpeta de migrations dentro de la carpeta prisma dentro de migrations estara la carpeta nombrada con un codigo aleatorio y el nombre que en este caso sera init
- Tambien añade la dependencia de prisma client