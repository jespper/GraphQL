var db = require("./db")

const Query = {
    test: () => {
        return 'Test Success, GraphQL server is up & running !!'
    },
    students: () => db.students.list()
 }
 module.exports = {Query}