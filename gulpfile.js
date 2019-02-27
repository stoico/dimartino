const gulp = require("gulp");
const pug = require("gulp-pug");

// run this task by typing in gulp pug in CLI
gulp.task("pug", function() {
  return gulp
    .src("./*.pug")
    .pipe(pug()) // pipe to pug plugin
    .pipe(gulp.dest("build")); // tell gulp our output folder
});

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask;
