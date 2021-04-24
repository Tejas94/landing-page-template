let gulp = require('gulp');
const { watch } = require('gulp-watch');
let minify = require('gulp-minify');
let gulpConcat = require('gulp-concat');
let less = require('gulp-less');
let cleanCss = require('gulp-clean-css');

gulp.task('concat-less', function(){
    console.log('Concating the files');
    let src = [
        "assets/less/*.less"
    ]
    return gulp.src(src)
        .pipe(less())
        .pipe(gulpConcat('application.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest('assets/css'));
});

gulp.task('copy-assets', function(){
    console.log('Copying the resources into build folder');
    let src = [
        "assets/bootstrap/**",
        "assets/img/**",
        "assets/js/**",
        "assets/css/**",
    ]
    return gulp.src(src, {base: 'assets'})
        .pipe(gulp.dest('build/assets'));
});

gulp.task('copy-view', function(){
    console.log('Copying the view files');
    let src = [
        "index.html"
    ]
    return gulp.src(src)
        .pipe(gulp.dest('build'));
});

gulp.task('build', gulp.series('copy-view', 'copy-assets'));

gulp.task('watch', function () {
    //add function instead of [] in gulp 4.x for watch
    gulp.watch('assets/less/*.less' , gulp.series('concat-less'));
});

gulp.task('default', gulp.series('concat-less', 'watch'));