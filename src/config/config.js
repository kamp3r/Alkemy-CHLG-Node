require('dotenv').config()

const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8080,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    jwtKey: process.env.JWT_KEY,
    mail: process.env.MAILER,
    mailPass: process.env.MAIL_PASS,
}

module.exports = {config}