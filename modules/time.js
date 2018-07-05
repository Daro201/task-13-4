var os = require('os');

function getTime() {
    var uptime = os.uptime();
    var minute = Math.floor(uptime / 60);
    var hours = Math.floor(uptime / 3600);
    var sec = Math.floor(uptime % 60);
    if (uptime < 60) {        
            console.log(sec + 'sek.')
    } else if (uptime < 3600){
            console.log(minute + 'min.' + sec + 'sek.');

    } else {       
        console.log((hours + 'godz. ' + (minute - 60 * hours) + 'min. ' + sec + 'sek.'))
    }
}
/*(hours + 'godz. ' + (minute - 60 * hours) + 'min. ' + sec + 'sek.')*/
exports.print = getTime;