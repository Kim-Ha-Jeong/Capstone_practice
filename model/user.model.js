const fs = require('fs');
const db = require('./db.js');
const ejs = require('ejs');
const file = __dirname + "/../views/user.html";
const updateFile = __dirname + "/../views/userUpdate.html";

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
        if (!err) res.redirect('/user');
        else console.log(err);
    })
};

User.getAll = (req, res) => {
    fs.readFile(file, 'utf8', (error, data) => {
        db.query("SELECT * FROM user", (err, result) => {
            if (!err) res.send(ejs.render(data, {
                data: result
            }));
            else console.log(err);
        });
    })
};

User.findById = (req, res) => {
    db.query("SELECT * FROM user WHERE id=?", [req.params.id],
        (err, result) => {
            if (!err) res.send(result);
            else console.log(err);
        })
}

User.update = (req, res) => {
    const sql = "SELECT * FROM user WHERE id = ?";
    fs.readFile(updateFile, 'utf8', (error, data) => {
        db.query(sql, [req.params.id], (err, result) => {
            if (!err) {
                res.send(ejs.render(data, {
                    data: result[0]
                }));
            }
            else console.log(err);
        });
    });
};

User.updateById = (req, res) => {
    const sql = "UPDATE user SET ? WHERE id=?";
    const values = {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        telephone: req.body.telephone
    }
    db.query(sql, [values, req.params.id], (err, result) => {
        if (!err) res.redirect('/user');
        else console.log(err);
    })
}

User.delete = (req, res) => {
    db.query("DELETE FROM user WHERE id = ?", req.params.id, (err, result)=> {
        if(!err) res.redirect("/user");
        else console.log(err);
    })
}

module.exports = User;