const sequelize = require('../db/conexion')


module.exports.nuevoAutor = async (autor)=> {
    try {
        let resultado = await sequelize.query(`INSERT INTO autor (nombres , apellidos) VALUES (?,?)`,
        {replacements: autor, type: sequelize.QueryTypes.SELECT});
        console.log(resultado)
        return 'Alta de autor correctamente'
        
    }catch (error) {
        console.log(error)
        throw new Error ("Ocurrio un error en la consulta");
    }
}

module.exports.listarAutor = async ()=>{
    try {
        let resultado = await sequelize.query('SELECT * FROM autor')
        return resultado
    }catch (error){
        console.log(error)
        throw new Error ("Ocurrio un error en la consulta");
    }
}