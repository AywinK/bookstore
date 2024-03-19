import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    'bookstoreDb', // Database name
    process.env.dbUser,    // Username
    process.env.dbPassword, // Password (replace with actual password)
    {
      dialect: 'mssql',
      dialectOptions: {
        options: {
          encrypt: true, // Encryption enabled
          trustServerCertificate: false // Do not trust server certificate
        }
      },
      host: 'aywinbookstore.database.windows.net',
      port: 1433, // Default SQL Server port
      pool: {
        max: 10, // Maximum number of connections in the pool
        min: 0, // Minimum number of connections in the pool
        acquire: 30000, // Maximum time (in milliseconds) that a connection can be idle before being released
        idle: 10000 // Maximum time (in milliseconds) that a connection can be idle before being closed
      },
      timezone: '+00:00' // UTC timezone
    }
  );

  console.log(process.env.dbUser, process.env.dbPassword);

export { sequelize };