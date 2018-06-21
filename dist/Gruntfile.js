"use strict";

/**
 * Created by akke on 6/26/17.
 */
require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
    "babel": {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                "public/dist/app.js": "src/app.js"
            }
        }
    }
});

grunt.registerTask("default", ["babel"]);
//# sourceMappingURL=Gruntfile.js.map