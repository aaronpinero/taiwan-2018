var fs = require('fs');
var templatesjs = require('templatesjs');
var cheerio = require('cheerio');

templatesjs.dir = "./includes/";

var filepath = {};
filepath.source = './html/';
filepath.dest = './';

var dir = fs.readdir(filepath.source,function(err,files){
	if (err) throw err;
	if (files.length) {
 		// loop to build menu
		menu = '<ul class="menu chapter-menu">\u000A';
		var m;
    for (m=0;m<files.length;m++) {
		  let file = fs.readFileSync(filepath.source+files[m],{encoding:'utf8'});
			const $ = cheerio.load(file, {
        xml: {
          normalizeWhitespace: true,
        }
      });
			var thisChapterName = $('h1').text();
			menu += '<li class="option"><a href="' + files[m] + '">' + thisChapterName + '</a></li>\u000A';
		}
		menu += '</ul>';
		// loop to insert template includes and output final html
		var x;
		for (x=0;x<files.length;x++) {
			let file = fs.readFileSync(filepath.source+files[x]);
			var nextFileName = (x == (files.length - 1)) ? files[0] : files[x+1];
			var prevFileName = (x === 0 ) ? files[files.length - 1] : files[x-1];
			templatesjs.setSync(file);
			file = templatesjs.renderSync("menu", menu);
			file = templatesjs.renderSync("prev", prevFileName);
			file = templatesjs.renderSync("next", nextFileName);
			fs.writeFileSync(filepath.dest+files[x],file);
		}
	}
});