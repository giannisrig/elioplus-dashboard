const gulp              = require('gulp');
const concat            = require('gulp-concat');
const uglify            = require('gulp-uglify-es').default;
const merge             = require('merge-stream');
const sass              = require('gulp-sass')(require('sass'));
const autoprefixer      = require('gulp-autoprefixer');
const config            = require('./gulp.config.json');
const sourcemaps        = require('gulp-sourcemaps');
const pug               = require('gulp-pug');
const postcss           = require('gulp-postcss');
const tailwindcss       = require("tailwindcss");

//set the sass compiler
sass.compiler  = require('node-sass');

const compilePug = config.settings.pug;


//Task to Compile the styles, scripts are combined and minified
if( compilePug ){
    gulp.task( 'pug:compile', function () {

        return gulp.src( 'src/**/*.pug' )
            // .pipe(gulp_watch_pug('templates/**/*.pug', { delay: 100 }))
            .pipe( pug( { pretty: true } ) )
            .pipe( gulp.dest('templates/') );


    });
}

//Task to Compile the styles, scripts are combined and minified
gulp.task( 'sass:compile', function () {

    //check if we are going to minify the combined styles
    const outputStyle = config.settings.css.minify ? 'compressed' : 'expanded';

    const tasks = config.styles.map(
        function( file ){
            return gulp.src(
                file.src.map(function( src_file ) {
                    return config.settings.css.src + src_file;
                })
            )
            .pipe( sourcemaps.init() )
            .pipe( concat( file.name + '.css' ) )
            .pipe( sass( { outputStyle: outputStyle } ).on( 'error', sass.logError ) )
            .pipe( autoprefixer({
                overrideBrowserslist: ['last 6 versions'],
                cascade: false
            }))
            .pipe(postcss([
                tailwindcss()
            ]))
            .pipe( sourcemaps.write( '.' ) )
            .pipe( gulp.dest( config.settings.css.dest )  );
        }
    );

    return merge(tasks);


});


//Task to Compile the scripts, scripts are combined and minified
gulp.task('scripts:compile', function() {

    const tasks = config.scripts.map(
        function( file ){
            return gulp.src(
                file.src.map(function( src_file ) {
                    return config.settings.js.src + src_file;
                })
            )
            .pipe( sourcemaps.init() )
            .pipe( concat(file.name + '.js' ) )
            .pipe( uglify().on( 'error', function(e){ console.log(e); } ) )
            .pipe( sourcemaps.write( '.' ) )
            .pipe( gulp.dest( config.settings.js.dest ) );
        }
    );

    return merge(tasks);

});


//Task to Watch only for changes in pug files
if( compilePug ) {
    gulp.task('pug:watch', function(done) {
        gulp.watch('src/**/*.pug', gulp.series('pug:compile'));
        done();
    });
}

//Task to Watch only for changes in styles
gulp.task('sass:watch', function (done) {
    gulp.watch( config.settings.css.src + '/**/*.scss', gulp.series( 'sass:compile' ) );
    done();
});


//Task to Watch only for changes in scripts
gulp.task( 'scripts:watch', function(done) {
    gulp.watch( config.settings.js.src + '/**/*.js', gulp.series( 'scripts:compile' ) );
    done();
});


//Task to Watch both styles and scripts
gulp.task('watch', function(done){

    gulp.watch( config.settings.css.src + '/**/*.scss', gulp.series( 'sass:compile' ) );
    gulp.watch( config.settings.js.src + '/**/*.js', gulp.series( 'scripts:compile' ) );
    if( compilePug ) {
        gulp.watch('src/**/*.pug', gulp.series('pug:compile', 'sass:compile'));
    }
    done();

});


//Change the default gulp task to compile styles and scripts and then watch
let tasks = ['sass:compile', 'scripts:compile', 'watch'];

if( compilePug ) {
    tasks.push('pug:compile')
}

gulp.task( 'default', gulp.series( tasks ) );

