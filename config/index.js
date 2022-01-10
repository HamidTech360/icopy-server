module.exports = (()=>{

    const env = process.env.NODE_ENV
    if(env == "production"){
        return{
            DATABASE_URL:'mongodb://localhost/icopy-prod',
            JWT_SECRET:'12345',
            EMAIL:'owolabihammed2001@gmail.com',
            PASSWORD:'olalekan2019...'
        }
    }
    return{
        DATABASE_URL:'mongodb://localhost/icopy',
        JWT_SECRET:'12345',
        PORT:3001,
        EMAIL:'owolabihammed2001@gmail.com',
        PASSWORD:'olalekan2019...'
    }
})()