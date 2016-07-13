( ( ) => {
    'use strict';

    var config = require('./config_gulp/config');

    config.fn.readFolder( config.foldersPath.tasks );

    config.modules.gulp.task('default', config.modules.sync.sync( [
            //sync
            'generics',
            'copy',
            'watch',
            'server'
        ] )
    )
})();
