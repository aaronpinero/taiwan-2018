var fs = require('fs');
var templatesjs = require('templatesjs');
templatesjs.dir = "./includes/";

var filepath = {};
filepath.source = './html/';
filepath.dest = './';

var dir = fs.readdir(filepath.source,function(err,files){
	if (err) throw err;
	if (files.length) {
		var x;
		for (x=0;x<files.length;x++) {
			var file = fs.readFileSync(filepath.source+files[x]);
			var nextFileName = (x == (files.length - 1)) ? files[0] : files[x+1];
			var prevFileName = (x === 0 ) ? files[files.length - 1] : files[x-1];
			templatesjs.setSync(file);
			file = templatesjs.renderSync("prev", prevFileName);
			file = templatesjs.renderSync("next", nextFileName);
			fs.writeFileSync(filepath.dest+files[x],file);
		}
	}
});