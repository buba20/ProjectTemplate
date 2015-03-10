var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    del = require('del');


gulp.task('copyIndex', function () {
    gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
        .pipe(browserSync.reload({stream: true}));

});

gulp.task('copyLibs', function () {

    gulp.src('src/js/libs/**/*.js')
        .pipe(gulp.dest('build/js/libs'));
});

gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: './build'
        }
    })
});

gulp.task('watchFiles', function () {
    gulp.watch('src/index.html', ['copyIndex']);
});

gulp.task('clean', function (cd) {
   del.sync('build',cd);
});

gulp.task('default', ['clean', 'copyLibs', 'copyIndex','browserSync','watchFiles']);