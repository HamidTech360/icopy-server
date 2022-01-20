module.exports = (()=>{

    const env = process.env.NODE_ENV
    if(env == "production"){
        return{
            DATABASE_URL:process.env.DATABASE_URL,
            JWT_SECRET:process.env.JWT_SECRET,
            EMAIL:'owolabihammed2001@gmail.com',
            PASSWORD:'olalekan2019',
            PORT:process.env.PORT,
            REFRESH_TOKEN:'1//04neDqBgx59tzCgYIARAAGAQSNwF-L9IriA2mpeDPKBLvptPTv6r_pML-OBkHD-zqc-WNaj8FqOpz-2ADLS6LQ5EBOtjLNKAAOok',
            ACCESS_TOKEN:'ya29.A0ARrdaM9Nj0ZnO2QBRpLkU2irTM7WTF92m4dwv2JHkHfYMNt2GvdkaaYtsiMzVm_5JeKPBr-2oKp13azeZXISrk3Ezjsdo2cXygUrzwSfWIetw39Sbc_BMbaEtsspTG0mJUjq3yP0P0SctSY9VL-yYsqbp2pS',
            CLIENT_ID:'140404377298-rirn46mh7o8nt0ga3vq7ka105pmsd9jd.apps.googleusercontent.com',
            CLIENT_SECRET:'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'
        }
    }
    return{
        DATABASE_URL:'mongodb://localhost/icopy',
        JWT_SECRET:'12345',
        PORT:3001,
        EMAIL:'owolabihammed2001@gmail.com',
        PASSWORD:'olalekan2019',
        REFRESH_TOKEN:'1//04neDqBgx59tzCgYIARAAGAQSNwF-L9IriA2mpeDPKBLvptPTv6r_pML-OBkHD-zqc-WNaj8FqOpz-2ADLS6LQ5EBOtjLNKAAOok',
        ACCESS_TOKEN:'ya29.A0ARrdaM9Nj0ZnO2QBRpLkU2irTM7WTF92m4dwv2JHkHfYMNt2GvdkaaYtsiMzVm_5JeKPBr-2oKp13azeZXISrk3Ezjsdo2cXygUrzwSfWIetw39Sbc_BMbaEtsspTG0mJUjq3yP0P0SctSY9VL-yYsqbp2pS',
        CLIENT_ID:'140404377298-rirn46mh7o8nt0ga3vq7ka105pmsd9jd.apps.googleusercontent.com',
        CLIENT_SECRET:'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'
    }
})()