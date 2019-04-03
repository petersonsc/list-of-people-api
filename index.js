var uniqueRandomArray = require('unique-random-array');
var express = require("express");
var cors = require('cors')
var app = express();

app.use(cors())

function listPeople() {
    const name = uniqueRandomArray(["Adam", "Abe", "Maria", "Rose", "Mario", "Luigi"]);
    const surname = uniqueRandomArray(["Lincoln", "Franklin", "Jackson", "Miyazaki", "M'bebe"]);

    let person = [];

    for (let i = 0; i < 10; i++) {
        person.push({
            id: i,
            name: name() + " " + surname(),
            disclosableInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini" +
                "m veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo c" +
                "onsequat."
        });
    }

    return person;
}

app.get("/rest/people", (req, res, next) => {
    res.json(listPeople());
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});