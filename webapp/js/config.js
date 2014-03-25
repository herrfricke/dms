define({
	app_name: "nodeDMS", 
	"baseUrl": "./",
	shim : {
		"ember" : {
			deps: ["handlebars", "jquery"],
			exports: "Ember"
		}
	},
	paths : {
		"app": "js/main",
		"controllers": "js/controllers",
		"domReady": "components/requirejs-plugins/domReady",
		"ember": "components/ember/ember",
		"foundation": "components/foundation/js/foundation",	
		"handlebars": "components/handlebars/handlebars.amd",
		"hbs": "libs/requirejs-plugins/hbs",
		"jquery": "components/jquery/dist/jquery",	
		"models": "js/models",
		"templates": "./templates",
		"views": "js/views",
		"text": "libs/requirejs-plugins/text"
	},
	/*hbs plugin options*/
	hbs: {
		disableI18n: true,
		templateExtension: "html"
	}

}); 
