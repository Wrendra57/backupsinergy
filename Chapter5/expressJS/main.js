const express = require('express');
const app = express();
app.use(express.json());

const users = [
    {
        id: 1,
        name: "wahyu",
        email: "wahyu@gmail.com",
        password: "1234",
        is_active: true
    },
    {
        id: 2,
        name: "rendra",
        email: "rendra@gmail.com",
        password: "5678",
        is_active: false
    },
    {
        id: 3,
        name: "kurniawan",
        email: "kurniawan@gmail.com",
        password: "9012",
        is_active: true
    },

]
const getUserHandler = (req, res) => {
    const name = req.query.name;
    let is_active = req.query.is_active;

    // console.log(is_active)
    if (is_active === "true") {
        is_active = true
    } else if (is_active === "false") {
        is_active === false
    }

    if (name) {
        res.json(users.filter(user => user.name === name))
    } else if (is_active) {
        res.json(users.filter(user => user.is_active === is_active))
    } else (
        res.json(users)
    )

}
const createUserHandler = (req, res) => {
    const { name, email, password } = req.body;

    // validasi
    if (!name || !email || !password) {
        res.status(400).send("Name, email, and password should not be empty")

        return
    }

    req.body.id = users[users.length - 1].id + 1

    let create = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        is_active: req.body.is_active
    }

    if (!req.body.is_active) {
        create.is_active = ''
    }
    // console.log(create)
    users.push(create)

    res.status(201).send(users);

    return
}

const getUserDetailHandler = (req, res) => {
    // id -> nge get data ke database sesuai dengan id yang dikirim user
    const { id } = req.params;
    const filteredUser = users.filter(user => user.id === parseInt(id));

    if (filteredUser.length === 0) res.status(404).send("User not found");
    else res.send(filteredUser[0]);

    return
}

const updateUserHandler = (req, res) => {
    const { id } = req.params;
    const { name, email, password, is_active } = req.body
    // console.log(id)
    const filteredUser = users.filter(user => user.id === parseInt(id));
    // console.log(filteredUser)
    if (filteredUser.length === 0) {
        res.status(404).send("User not found");

        return
    }

    const updateUser = users.map(user => {
        if (user.id === parseInt(id)) {
            user.name = name,
                user.email = email,
                user.password = password,
                user.is_active = is_active
        }

        return user
    })
    res.json(updateUser);

    return
}

const deleteUserByIDHandler = (req, res) => {
    const { id } = req.params;
    const filteredUser = users.filter(user => user.id !== parseInt(id));

    if (filteredUser.length === users.length) res.status(404).send("user not found");
    else res.json(filteredUser);

    return
}
app.get("/api/users", getUserHandler)
app.post("/api/users", createUserHandler)
app.get("/api/users/:id", getUserDetailHandler)
app.put("/api/users/:id", updateUserHandler)
app.delete("/api/users/:id", deleteUserByIDHandler)

app.listen(1000, () => {
    console.log("Server running at http://127.0.0.1:1000")
})