module.exports = (()=>{

    const env = process.env.NODE_ENV
    if(env == "production"){
        return{
            DATABASE_URL:process.env.DATABASE_URL,
            JWT_SECRET:process.env.JWT_SECRET,
            EMAIL:'hamid@gtarealestatealade.com.ng',
            PASSWORD:'olalekan2019',
            PORT:process.env.PORT
            
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