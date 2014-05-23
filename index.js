var julius = require('julius-net')({host: process.env.JULIUS_HOST || 'localhost', port: process.env.JULIUS_PORT || 10500});

julius.on('recognitionSuccess', function(rec) {
    console.log(rec);
});
