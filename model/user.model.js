const db = require('../db.js');
const conn = db.init();
db.connect(conn);

const User = (user) => {
    this.email = user.email;
    this.password = user.password;
    this.name = user.name;
    this.telephone = this.telephone;
}

User.create = (newUser, result) => {
    const sql = `INSERT INTO user SET ?`;
    db.query(sql, newUser, (err, res) => {
        if(err) {
            console.log('error : ', err);
            result(err, null);
            return;
        }
        
        result(null, {id: res.InsertId, newUser});
    });
};

User.getAll = result => {
    db.query('SELECT * FROM user', (err, res) => {
        if(err){
            console.log("error: ", err);
            result(null, err);
            return;
        }

        result(null, res);
    });
};

module.exports = User;