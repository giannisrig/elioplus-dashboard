# Elioplus Templates Documentation
## Preview:
Just open the html files under /templates/ folder on your browser.


## Folder Structure:
- /assets: The public static assets of the website, styles, scripts & images. Styles & Scripts are categorised in source and distribution (production)
- /src : The source folder of the pug files. You can inspect the pug files to get an overview of the logic for some component rendering and overall structure.
- /templates : The final HTML files. In addition to the pages there are some general components with their HTML.

## Tech:
### Pug:
A templating engine designed to render HTML in server-side technologies such as Node. js
<br>
<br>
Pug Documentation: https://pugjs.org/api/getting-started.html

### Tailwind CSS:
A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup. Used as a CSS framework.
<br>
<br>
Tailwind Documentation: https://tailwindcss.com/docs/installation

### Gulp:
A tool to automate tasks and create workflows.
<br>
Used for: 
- Compile SASS to CSS
- Concate multiple JS files to a single one and minify it
- Compile PUG files to HTML
- Run Tailwind to generate the final styles

# Production
For production follow these steps: 
<br>Copy the <strong>assets</strong> & <strong>templates</strong> folder and the root files to the public root directory of your project. 
<br>Open and edit the gulp.config.js file and change the pug value to false
```
{
  "settings": {
    "pug": false,
  }
}  
```
<br>Open and edit the tailwind.config.js file and change the content value:
```
content: [ "./templates/**/*.html", "./assets/js/**/*.js"],
```
with
```
content: [ "./path-to-your-asp-files/**/*.asp", "./assets/js/**/*.js"],
```

# Gulp Documentation
How to install and execute Gulp for task managements of the assets (css,scss,js)
## 1. How to install Gulp on your local computer
### Step 1: Install NodeJS, NPM & NPX

You can check if you have them installed on your computer by opening a terminal and run these commands:
```
node --version
```

```
npm --version
```
```
npx --version
```

If you don't have node installed you can download it from: https://nodejs.org/en/download


### Important:
If you are on MAC, use sudo while installing gulp, and it’s packages in the next steps.

### Step 2: Install the Gulp CLI

Run the following command to install the Command Line Interface (CLI) for Gulp:
```
npm install --global gulp-cli
```

### Step 3: Create package.json in your WordPress theme root folder

Navigate to the root folder of the WordPress theme, open it in a terminal and run the following command:
```
npm init
```

### Step 4: Install the gulp package in your dev dependencies

```
npm install --save-dev gulp
```

### Step 5: Make sure Gulp is installed

```
gulp --version
```

### Step 6: Install Packages
Install the following packages for the tasks management of the assets:
```
npm install --save-dev gulp-concat gulp-uglify-es merge-stream node-sass gulp-sass sass gulp-autoprefixer gulp-sourcemaps
```

## 2. How to run Gulp to compile assets

The gulp as a task manager runs by extracting the logic defined in the gulpfile.js. The gulpfile in consisted by a set of tasks that are node packages to handle tasks.
You can read more about the gulpfile here: https://gulpjs.com/docs/en/getting-started/javascript-and-gulpfiles/

### Navigate and open the root folder of the Theme you are working on in terminal and run the following command:
```
gulp
```
This is the default command defined in the gulpfile. By running gulp you are running all the available tasks created in the gulpfile.

### Individual commands:
Compile the source SASS files to css
```
gulp sass:compile
```
Compile the source script files to js
```
gulp scripts:compile
```
Watch for changes in source style files and compile them on change
```
gulp sass:watch
```
Watch for changes in source script files and compile them on change
```
gulp scripts:watch
```
Watch for changes in both source script & SASS files and compile them on change
```
gulp watch
```
## 3. Change source & distribution files
The paths of the source files for scripts and styles are defined in the gulp.config.json file which is located in the same folder as the gulpfile.js, which is the
root folder of the WordPress Theme.

The gulp.config.json has the following structure:
```
{
  "settings": {},
  "styles": [],
  "scripts": []
}
```
### 3.1 Settings
Here we define the source and destination paths for the styles and scripts
```
"settings": {
    "css": {
      "src": "assets/src/scss",
      "dest": "assets/dist/css",
      "minify": false
    },
    "js": {
      "src": "assets/src/js",
      "dest": "assets/dist/js"
    }
  },
```
### 3.2 Styles
The styles setting is an array of arrays in each we can define a set of source SASS files that will be compiled to one single CSS file with the name defined.
The compiled css file will be located based on the destination path defined in the settings.
<br><br>
You can see an example structure:
```
 "styles": [
    {
      "name" : "compiled-style-1.min",
      "src" : [
        "/sourcefile1.scss",
        "/sourcefile2.scss",
        "/sourcefile3.scss",
      ]
    },
    {
      "name" : "compiled-style-2.min",
      "src" : [
        "/sourcefile1.scss",
        "/sourcefile4.scss",
        "/sourcefile5.scss",
      ]
    }
  ],
```
### 3.3 Scripts
The same logic applies for the scripts, where the scripts setting is an array of arrays in each we can define a set of source JS files that will be compiled to one single JS file with the name defined.
The compiled JS file will be located based on the destination path defined in the settings.
<br><br>
You can see an example structure:
```
 "scripts": [
    {
      "name" : "compiled-script-1.min",
      "src" : [
        "/script_1.js",
        "/script_2.js",
        "/script_3.js",
      ]
    },
    {
      "name" : "compiled-script-2.min",
      "src" : [
        "/script_1.js",
        "/script_4.js",
        "/script_5.js",
      ]
    }
  ]
```

### IMPORTANT: When making a change to either the gulpfile.js or the gulp.config.json, you need to restart gulp.

