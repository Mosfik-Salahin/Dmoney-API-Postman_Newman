    const newman = require('newman'); 

        newman.run({ 
             collection: require('./collection/dmoney_collection.json'), 
            //environment: require('./collection/dmoney_collection.json'),
            iterationCount: 1, 
            reporters: 'htmlextra', 
            reporter: { 
                htmlextra: { 
                export: './Reports/report.html', // If not specified, the file  will be written to `newman/` in the current working directory.  } 
 } 
}
}, function (err) {
 if (err) { throw err; } 
 console.log('collection run complete!'); 
}); 

