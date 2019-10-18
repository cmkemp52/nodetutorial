const db = require("./conn");

class artists{
    constructor(id, name) {
        this.id= id;
        this.name = name;
    }
    static async getAll(){
        try{
            const response = await db.any(`SELECT * FROM artist`);
            console.log(response);
            return response;
        } catch(err){
            return err.message
        }
    }
}

module.exports = artists;