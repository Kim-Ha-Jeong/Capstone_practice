const fs = require('fs');
const db = require('./db.js');
const ejs = require('ejs');
const file = __dirname+"/../views/user.html";

const User = (user) => {
    this.email = user.email;
    this.password = user.password;
    this.name = user.name;
    this.telephone = this.telephone;
}

User.create = (req, res) => {
    const sql = 'INSERT INTO user SET ?';
    const values = {
        email: req.body.email, 
        password: req.body.password, 
        name: req.body.name, 
        telephone: req.body.telephone
    }
    db.query(sql, values, (err, result) => {
        if(!err) res.redirect('/user');
        else console.log(err);
    })
};

User.getAll = (req, res) => {
    fs.readFile( file, 'utf8', (error, data) => {
        db.query("SELECT * FROM user", (err, result) => {
            if(!err) res.send(ejs.render(data, {
                data: result
            }));
            else console.log(err);
        });
    })
};

User.findById = (req, res) => {
    db.query("SELECT * FROM user WHERE id=?", [req.params.id], 
    (err, result) => {
        if(!err) res.send(result);
        else console.log(err);
    })
}

module.exports = User;