const gulp = require("gulp");
const pug = require("gulp-pug");

// run this task by typing in 'gulp pug' in CLI
gulp.task("pug", function() {
  return gulp
    .src("templates/pages/*.pug")
    .pipe(
      pug({
        pretty: true
      })
    ) // pipe to pug plugin
    .pipe(gulp.dest("build")); // tell gulp our output folder
});

// Copy 'style' folder into the 'build' folder
gulp.task("copy-style-folder", function() {
  return gulp.src("style/**").pipe(gulp.dest("build/style"));
});

gulp.task("default", gulp.series("pug", "copy-style-folder"));
