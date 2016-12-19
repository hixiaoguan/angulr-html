module.exports = {
    libs:{
        files:[
            {
                src:  [
                    'jquery/dist/jquery.js',
                    'bootstrap/dist/**',
                    'datatables/media/js/jquery.dataTables.min.js',
                    'plugins/integration/bootstrap/3/**',
                    'plugins/integration/bootstrap/images/**',
                    'footable/dist/footable.all.min.js',
                    'footable/css/footable.core.css',
                    'footable/css/fonts/**',
                    'bower-jvectormap/*.js',
                    'bower-jvectormap/jquery-jvectormap-1.2.2.css',
                    'flot/jquery.flot.js',
                    'flot/jquery.flot.resize.js',
                    'flot/jquery.flot.pie.js',
                    'flot.tooltip/js/jquery.flot.tooltip.min.js',
                    'flot-spline/js/jquery.flot.spline.min.js',
                    'flot.orderbars/js/jquery.flot.orderBars.js',
                    'moment/moment.js',
                    'screenfull/dist/screenfull.min.js',
                    'slimscroll/jquery.slimscroll.min.js',
                    'html5sortable/jquery.sortable.js',
                    'nestable/jquery.nestable.js',
                    'bootstrap-filestyle/src/bootstrap-filestyle.js',
                    'bootstrap-slider/bootstrap-slider.js',
                    'jquery.sparkline/bootstrap-slider.css',
                    'chosen/chosen.jquery.min.js',
                    'chosen/chosen.css',
                    'chosen/chosen-sprite.png',
                    'bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js',
                    'bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css',
                    'bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                    'bootstrap-wysiwyg/external/jquery.hotkeys.js',
                    'fullcalendar/dist/fullcalendar.min.js',
                    'bootstrap-daterangepicker/daterangepicker.js',
                    'bootstrap-daterangepicker/daterangepicker-bs3.css',
                    'bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
                    'bootstrap-tagsinput/dist/bootstrap-tagsinput.css',
                    'jquery_appear/jquery.appear.js',
                    'jquery.easy-pie-chart/dist/jquery.easypiechart.js',
                    'jquery.sparkline/jquery.sparkline.retina.js',
                    'jquery.sparkline/jquery-jvectormap-us-aea-en.js',
                    'jquery.sparkline/jquery.nestable.css',
                ],
                dest: 'libs/jquery',
                cwd:  'bower_components',
                expand: true
            },
            {
                src:  [
                    'animate.css/animate.css',
                    'font-awesome/css/**',
                    'font-awesome/fonts/**',
                    'simple-line-icons/css/**',
                    'simple-line-icons/fonts/**',
                    'bootstrap-rtl/dist/css/bootstrap-rtl.min.css'
                ],
                dest: 'libs/assets',
                cwd:  'bower_components',
                expand: true
            },
            {src: '**', cwd: 'bower_components/bootstrap/dist/fonts', dest: 'src/fonts', expand: true}
        ]
    },
    html: {
        files: [
            {expand: true, src: '**', cwd:'src/fonts/', dest: 'html/fonts/'},
            {expand: true, src: "**", cwd: 'src/api',     dest: "html/api"},
            {expand: true, src: '**', cwd:'src/img/', dest: 'html/img/'},
            {expand: true, src: '*.css', cwd:'src/css/', dest: 'html/css/'},
        ]
    }
};
