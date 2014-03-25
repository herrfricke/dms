requirejs.config({
	"baseUrl": "./",
	"paths": {
		"ember": "components/ember/ember",
		"foundation": "components/foundation/js/foundation",
		"jquery": "components/jquery/dist/jquery"

	},
	"shim": {
		"angular": {
			"exports": "angular"
		},
		"foundation": {
			"dependencies": ["jquery"],
			"exports": "Foundation"
		}
	}
});

// Load the main app module to start the app
requirejs(["js/main"]);