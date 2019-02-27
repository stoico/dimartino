const gulp = require("gulp");
const pug = require("gulp-pug");

// run this task by typing in 'gulp pug' in CLI
gulp.task("pug", function() {
  return gulp
    .src("templates/*.pug")
    .pipe(pug()) // pipe to pug plugin
    .pipe(gulp.dest("build")); // tell gulp our output folder
});

gulp.task("default", gulp.series("pug"));
