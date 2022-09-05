import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "192.168.10.10",
    port: 3306,
    username: "homestead",
    password: "secret",
    database: "nest",
    synchronize: true,
    entities: [__dirname + '/../**/*.entity.{js,ts}']
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
