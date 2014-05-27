var Julius = require('julius-net'),
    julius = new Julius({host: process.env.JULIUS_HOST || 'localhost', port: process.env.JULIUS_PORT || 10500}),
    say = require('say'),
    Speakable = require('speakable');

var triggerWords = ['<s>', 'HEY', 'COMPUTER', '</s>'],
    threshold = 3.85;

julius.on('recognitionSuccess', function(rec) {
    var sumCm = 0,
        words = rec[0].words.map(function(word) {return word.word});

    for (var i = 0; i < words.length; i++) {
        if (triggerWords[i] !== words[i]) {
            return;
        }
        sumCm += rec[0].words[i].cm;
    }
    if (sumCm < threshold) {
        return;
    }
    //console.log(words);
    say.speak('Kathy', 'Yes sir?');
    //console.log(rec);
    //console.log(rec[0].words);
});


var speakable = new Speakable();
speakable.on('speechStart', function() {
  console.log('starting...');
});
speakable.on('speechStop', function() {
  console.log('stopping...');
});
speakable.on('speechReady', function() {
  //console.log('listening...');
});
speakable.on('error', function(err) {
  console.log('error');
  console.log(err);
});
speakable.on('speechResult', function(rec) {
  console.log(rec);
});

speakable.recordVoice();
