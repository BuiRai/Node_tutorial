function parse(req){
	var arreglo_parametros = [], parametros = {};

	// Se pregunta si contiene un "?"
	if ( req.url.indexOf("?") > 0 ) {
		var url_data = req.url.split("?");
		var arreglo_parametros = url_data[1].split("&");
	}

	for( var i =  arreglo_parametros.length - 1 ; i >= 0 ; i-- ) {
		var parametro = arreglo_parametros[i];
		var param_data = parametro.split("=");

		parametros[param_data[0]] = param_data[1]; 
	}

	return parametros;

}

function renderView(html, parametros){
	var html_str = html.toString();

	var variables = html_str.match(/[^\{\}]+(?=\})/g);
	var nombre = "Lucario";

	// variable ["nombre"]
	for (var i = variables.length - 1;  i >= 0 ; i--) {
		var variable = variables[i];
		html_str = html_str.replace("{"+variables[i]+"}", parametros[variable]);
	};

	return html_str;

}

module.exports.parse = parse;
module.exports.renderView = renderView;