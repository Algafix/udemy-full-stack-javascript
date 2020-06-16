var models = require('./server.js').models;

/*
var toSave = [
    {name: "Nick", email: "nick@mail.com"},
    {name: "Nick1", email: "mail@mail.com"},
    {name: "Nick2", email: "mail1@mail.com"},
    {name: "Nick3", email: "mail2@mail.com"},
    {name: "Nick4", email: "someone@mail.com"},
    {name: "Someone", email: "email@mail.com"},
    {name: "Someone else", email: "nick@1mail.com"},
    {name: "Someone1", email: "nick@masil.com"},
    {name: "Some1", email: "nick@m4ail.com"},
    {name: "nick", email: "nick@5mail.com"},
    {name: "nickgermaine", email: "nick@m6ail.com"}
];

toSave.map(obj => {
    models.Profile.create(obj, (err, created) => {
        console.log("Created?", created);
    })
});
*/

/*
var filter = {
    where: {}, // Kind of like mysql where clause
    order: 'date ASC', // Order by 'date' in 'ascending' order
    limit: 3,
    include: {
        relation: 'Posts',
        scope: {
            limit: 5,
            order: 'date DESC',
            include: {
                relation: 'Image',
                limit: 1,
                where: {type: 'thumbnail'}
            }
        }
    }
}
*/

var filter = {
    where: {
        email: {like: 'nick'}
    }, // Kind of like mysql where clause
    order: 'date ASC', // Order by 'date' in 'ascending' order
    limit: 10,
    skip: 2,
    fields: {
        email: true
    }
}

models.Profile.find(filter, (err, found) => {
    console.log("Found?", err, found);
})