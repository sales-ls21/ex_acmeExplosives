function parseCategories(categories){
	for (var j = 0; j < categories.categories.length; j++){
	var names = [];
	var ids = [];
	ids.push(categories.categories[j].id);
	names.push(categories.categories[j].name);
	// console.log(ids, names);
	}
}

function parseTypes(typesData){
	var types = typesData.types;
	var domArr = [];
	for (var p = 0; p < types.length; p++){
		var stringDOM = "<div class = 'col-md-4 prodDiv'>" + "<p>" + types[p].name + "</p>" + "<p>" + types[p].description + "</p>" + "<p>" + types[p].id + "</p>" + "<p class='catId'>" + types[p].categoryId + "</p>" + "</div";
		domArr.push(stringDOM);
	}
	// $("#types").append(domArr);
}

function parseProducts(products){
	var prodArr = products.products[0];
	var charredStump = prodArr.charred_stump;
	var stringOne = "<div class ='col-md-4 col-md-offset-3 prodCard hidden displayDemo'>" + "<p>" + charredStump.name + "</p>" + "<p>" + charredStump.description + "</p>" + "<p>" + charredStump.typeId + "</p>" + "</div>";
	var dy_no_mite = prodArr.dy_no_mite;
	var stringTwo = "<div class ='col-md-4 col-md-offset-3 prodCard hidden displayDemo'>" + "<p>" + dy_no_mite.name + "</p>" + "<p>" + dy_no_mite.description + "</p>" + "<p>" + dy_no_mite.typeId + "</p>" + "</div>";
	var fairySparklers = prodArr.fairy_sparklers;
	var stringThree = "<div class ='col-md-4 col-md-offset-3 prodCard hidden displayType'>" + "<p>" + fairySparklers.name + "</p>" + "<p>" + fairySparklers.description + "</p>" + "<p>" + fairySparklers.typeId + "</p>" + "</div>";
	var ooohMaker = prodArr.oooh_maker;
	var stringFour = "<div class ='col-md-4 col-md-offset-3 prodCard hidden displayType'>" + "<p>" + ooohMaker.name + "</p>" + "<p>" + ooohMaker.description + "</p>" + "<p>" + ooohMaker.typeId + "</p>" + "</div>";
	$("#category").append(stringOne);
	$("#category").append(stringTwo);
	$("#category").append(stringThree);
	$("#category").append(stringFour);
}