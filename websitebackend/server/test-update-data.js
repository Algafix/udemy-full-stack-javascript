var models = require('./server.js').models;

// Ways to update data
// $ node server/test-update-data.js
// See the results in mongo database
models.Profile.findOrCreate({name: "nick2"}, (err, profile) => {
    if(err) {
        console.log("There was an error", err);
    } else if(profile){
        /*
        profile.updateAttributes({
            email: "nick@nickupdated.com"
        }, (updateError, updated) => {
            console.log("Saved?", updateError, updated);
        });
        */
       profile.email = "nick@nickupdated2.com";
       profile.save((ue, updated) => {
           console.log("Updated?", updated);
       });
    }
})