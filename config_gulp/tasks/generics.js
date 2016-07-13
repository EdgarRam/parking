

( () => {


    module.exports = ( config ) => {
        'use strict'
        // Jade views
        config.modules.gulp.task('generics', config.modules.sync.sync( [
                //sync
                'clean',
                [
                    //async
                    'pug',
                    'stylus',
                    'babel'
                ],
                'templatesCache'
            ]) )

    }


} )()
