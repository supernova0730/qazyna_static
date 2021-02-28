let project_folder = 'dist';
let source_folder = 'app';

let path = {
    build: {
        html:  project_folder + '/',
        css:   project_folder + '/css/',
        js:    project_folder + '/js/',
        img:   project_folder + '/img/',
    },
    src: {
        html:  [source_folder + '/*.html', '!' + source_folder + '/includes/*.html'],
        css:   source_folder + '/css/style.css',
        js:    source_folder + '/js/script.js',
        img:   source_folder + '/img/*',
    },
    watch: {
        html:  source_folder + '/**/*.html',
        css:   source_folder + '/css/**/*.css',
        js:    source_folder + '/js/**/*.js',
        img:   source_folder + '/img/*',
    },
    clean: './' + project_folder + '/'
}

const { src, dest } = require('gulp');
const gulp = require('gulp');
let browsersync = require('browser-sync').create();
const fileinclude = require('gulp-file-include');
let del = require('del');

function browserSync(params) {
  browsersync.init({
      server: {
          baseDir: './' + project_folder + '/',
      },
      port: 3000,
      notify: false,
      open: false
  })
}

function html() {
  return src(path.src.html)
      .pipe(fileinclude())
      .pipe(dest(path.build.html))
      .pipe(browsersync.stream())
}

function css() {
  return src(path.src.css)
      .pipe(dest(path.build.css))
      .pipe(browsersync.stream())
}

function js() {
  return src(path.src.js)
      .pipe(dest(path.build.js))
      .pipe(browsersync.stream())
}

function images() {
  return src(path.src.img)
      .pipe(dest(path.build.img))
      .pipe(browsersync.stream())
}

function watchFiles(params) {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.img], images);
}

function clean(params) {
  return del(path.clean); 
}

let build = gulp.series(clean, gulp.parallel(js, css, html, images));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.images = images;
exports.js = js;
exports.css = css
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;