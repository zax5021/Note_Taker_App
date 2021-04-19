const fs = require("fs").promises;
const path = require("path");

const readNotes = () => 
    fs
        .readFile(path.join(path.join(__dirname, "./notes.json")))
 