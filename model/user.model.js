const db = require('./db.js');

const User = (user) => {
    this.email = user.email;
    this.password = user.password;
    this.name = user.name;
    this.telephone = this.telephone;
}

User.create = (req, res) => {
    const sql = 'INSERT INTO user(email, password, name, telephone) VALUES(?, ?, ?, ?)';
    const values = {
        email: req.body.email, 
        password: req.body.password, 
        name: req.body.name, 
        telephone: req.body.telephone
    }
    db.query(sql, values, (err, result) => {
        if(!err) res.redirect('/');
        else console.log(err);
    })
};

User.getAll = (req, res) => {
    db.query("SELECT * FROM user", (err, result) => {
        if(!err) res.send(result);
        else console.log(err);
    });
};

User.findById = (req, res) => {
    db.query("SELECT * FROM user WHERE id=?", [req.params.id], 
    (err, result) => {
        if(!err) res.send(result);
        else console.log(err);
    })
}

module.exports = User;