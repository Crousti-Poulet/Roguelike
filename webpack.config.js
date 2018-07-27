var Encore = require('@symfony/webpack-encore');

Encore
    // the project directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')
    // the public path you will use in Symfony's asset() function - e.g. asset('build/some_file.js')
    .setManifestKeyPrefix('build/')

    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())

    // the following line enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    Encore.enableSassLoader()
    // uncomment to define the assets of the project
    .addStyleEntry('css/app', './assets/css/bootstrap-css/bootstrap.css')
    .addStyleEntry('stylesheet/app', './assets/css/scss/style.scss')
    // .addEntry('js/app', './assets/js/bootstrap-js/bootstrap.js')
    .addEntry('js/app', './assets/js/main.js')
    .addEntry('vuejs/app', './assets/js/vuejs/vue.js')
    .addEntry('bootstrap-js/app', './assets/js/bootstrap-js/bootstrap.js')
    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment if you use Sass/SCSS files
    //.enableSassLoader()

    // Enable Vue Loader
    .enableVueLoader()

    // uncomment for legacy applications that require $/jQuery as a global variable
    //.autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
