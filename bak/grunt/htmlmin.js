module.exports = {
	min: {
      files: [{
          expand: true,
          cwd: 'src/',
          src: ['*.html', '**/*.html'],
          dest: 'html/',
          ext: '.html',
          extDot: 'first'
      }]
  }
}