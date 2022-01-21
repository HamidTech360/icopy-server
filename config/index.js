module.exports = (()=>{

    const env = process.env.NODE_ENV
    if(env == "production"){
        return{
            DATABASE_URL:process.env.DATABASE_URL,
            JWT_SECRET:process.env.JWT_SECRET,
            EMAIL:process.env.EMAIL,
            PASSWORD:process.env.PASSWORD,
            PORT:process.env.PORT,
            REFRESH_TOKEN:process.env.REFRESH_TOKEN,
            ACCESS_TOKEN:process.env.ACCESS_TOKEN,
            CLIENT_ID:process.env.CLIENT_ID,
            CLIENT_SECRET:process.env.CLIENT_SECRET
        }
    }

    require ('dotenv').config()
    
    return{
        DATABASE_URL:'mongodb://localhost/icopy',
        JWT_SECRET:process.env.JWT_SECRET,
        PORT:3001,
        EMAIL:process.env.EMAIL,
        PASSWORD:process.env.PASSWORD,
        REFRESH_TOKEN:process.env.REFRESH_TOKEN,
        ACCESS_TOKEN:process.env.ACCESS_TOKEN,
        CLIENT_ID:process.env.CLIENT_ID,
        CLIENT_SECRET:process.env.CLIENT_SECRET
    }
})()