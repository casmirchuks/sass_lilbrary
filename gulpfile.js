const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const buildStyles = () => {
  return src("*.scss").pipe(sass()).pipe(dest("css"));
};

const watchTask = () => {
  //1st arg is an array of file to watch, 2nd arg is a function to run when the files change
  watch(["*.scss"], buildStyles);
};

exports.default = series(buildStyles, watchTask);
