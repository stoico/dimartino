const gulp = require("gulp");
const pug = require("gulp-pug");

// run this task by typing in 'gulp pug' in CLI
gulp.task("pug", function() {
  return gulp
    .src("./templates/pages/*.pug")
    .pipe(
      pug({
        pretty: true
      })
    ) // pipe to pug plugin
    .pipe(gulp.dest("docs")); // tell gulp our output folder
});

// Copy 'style' folder into the 'docs' folder
gulp.task("copy-style-folder", function() {
  return gulp.src("./style/**").pipe(gulp.dest("docs/style"));
});

// Watch for changes and run the tasks when a change is detected
gulp.task("watch", function() {
  gulp.watch("./templates/**", gulp.series("pug"));
  gulp.watch("./style/**", gulp.series("copy-style-folder"));
});

gulp.task("default", gulp.series("watch"));
