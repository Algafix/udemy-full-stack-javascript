var models = require('./server.js').models;

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

models.Profile.destroyAll(filter.where, (err, data) => {
    console.log("Found?", err,data);
})

