const gulp = require("gulp");
const pug = require("gulp-pug");
const browserSync = require("browser-sync").create(); // create a browser sync instance.
const imagemin = require("gulp-imagemin");

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

gulp.task("minify-images", () =>
  gulp
    .src("docs/style/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("docs/style/images"))
);

// Watch for changes and run the tasks when a change is detected
gulp.task("watch", function() {
  browserSync.init({
    server: {
      baseDir: "./docs/"
    }
  });

  gulp.watch("./templates/**", gulp.series("pug"));
  gulp.watch("./style/**", gulp.series("copy-style-folder"));
  gulp.watch("./docs/").on("change", browserSync.reload);
});

gulp.task("default", gulp.series("watch"));
