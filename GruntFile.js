module.exports = function(grunt) {
	var gtx = require('gruntfile-gtx').wrap(grunt);

    gtx.loadAuto();

    var gruntConfig = require('./grunt');
    gruntConfig.package = require('./package.json');

    gtx.config(gruntConfig);
 
    gtx.alias('build:html', [
        'clean:html', 
        'copy', 
        'recess:html', 
        'concat:html', 
        'uglify:html',
        'htmlmin:min',
        'usemin:html',
        'useminPrepare:html'
    ]);

    gtx.finalise();
}
