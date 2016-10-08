    var fs = require('fs');
    function mkdir(s_dir) {
        var hereDir = '';
        s_dir.split('/').forEach(function (item) {
            hereDir += item + '/';
            if (!fs.existsSync(hereDir))fs.mkdirSync(hereDir);
        });
    }
    mkdir('./tmp/222/333');
