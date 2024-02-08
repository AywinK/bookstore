import { Sequelize } from "sequelize";


// const sequelize = new Sequelize(
//     "aywin_db",
//     "learner",
//     "Cheesecake",
//     {
//         host: "172.187.184.173",
//         dialect: "mssql",
//         dialectOptions: {
//             options: {
//                 encrypt: true,
//             },
//         },
//     }
// );

const sequelize = new Sequelize(
    "aywin_db",
    "SA",
    "123qweQWE!",
    {
        host: "localhost",
        dialect: "mssql",
        dialectOptions: {
            options: {
                encrypt: true,
            },
        },
    }
);

export { sequelize };