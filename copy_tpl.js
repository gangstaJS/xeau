const recursive = require('recursive-readdir');
const fs = require('fs-extra');
const path = require('path');


recursive('templates_src', function (err, files) { 
  for(var i = 0, l = files.length; i<l; i++) {
  	var tmp_arr = files[i].split(path.sep);
  	tmp_arr[0] = 'templates';
  	var new_path = tmp_arr.join(path.sep).replace('.html', '');

	fs.copy(files[i], new_path, function (err) {
	  if (err) return console.error(err)
	  console.log(new_path + " success!")
	});
  }	

});