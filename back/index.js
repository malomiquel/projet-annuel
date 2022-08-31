const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const expressJSDocSwagger = require('express-jsdoc-swagger');

//Swagger options
const options = {
    info: {
        version: '1.0.0',
        title: 'Player score API',
        license: {
            name: 'MIT',
        },
    },
    baseDir: __dirname,
    // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
    filesPattern: './**/*.js',
    // URL where SwaggerUI will be rendered
    swaggerUIPath: '/api-docs',
    // Expose OpenAPI UI
    exposeSwaggerUI: true,
    // Expose Open API JSON Docs documentation in `apiDocsPath` path.
    exposeApiDocs: false,
    // Open API JSON Docs endpoint.
    apiDocsPath: '/v3/api-docs',
    // Set non-required fields as nullable by default
    notRequiredAsNullable: false,
    // You can customize your UI options.
    // you can extend swagger-ui-express config. You can checkout an example of this
    // in the `example/configuration/swaggerOptions.js`
    swaggerUiOptions: {},
    // multiple option in case you want more that one instance
    multiple: true,
};

const app = express()
expressJSDocSwagger(app)(options);

const port = 3333

app.use(bodyParser.json())

//Allowing cross-origin  
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


//Importing routes dynamicaly
fs.readdirSync(__dirname + "/routes").forEach((file) => {
    require(__dirname + "/routes/" + file)(app);
});

//Start server
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})