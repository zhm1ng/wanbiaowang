var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');

//发布任务
gulp.task('sass',function(){
    gulp.src('./src/sass/*.scss').pipe(sass()).pipe(rename({"suffix":".main"}))
    //.pipe(cssnano())
    .pipe(gulp.dest('./dist'));
})
gulp.task('default',function(){
    gulp.watch(['./src/sass/*.scss'],['sass']);
})