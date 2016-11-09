var categories;
var products;
var types;
function getCategories() {
	return new Promise((resolve, reject) => { 
	$.ajax({
		url:"data/categories.json"
		}).done(function(data){
		resolve(data);
		}).fail( (error) => {
			reject(error);
		});
	})
}

function getProducts() {
	return new Promise ( (resolve, reject) =>{
		$.ajax({
			url: "data/products.json"
		}).done(function (data){
			resolve(data);
		}).fail( (error) =>{
			reject(error);
		});
	})
}

function getTypes (){
	return new Promise ( (resolve, reject) =>{
		$.ajax({
			url: "data/types.json"
		}).done(function(data){
			resolve(data);
		}).fail( (error) => {
			reject(error);
		});
	})
}

// /*if you want to time the order of events because one file depends on information from the other, you should call the other function
// on the "resolve(data)" line.*/

// /*in order to chain "thens", you must return a promise. */
getCategories()
.then( (categoryData) =>{
	categories = categoryData;
	parseCategories(categories);
	return getProducts(); //This is where you can return the value of the promise contained in getTypes. This allows you to chain on another "then".
})
.then( (productsData) => {
	products = productsData;
	parseProducts(products);
	return getTypes();
	})
.then((typesData) => {
	types = typesData;
	parseTypes(typesData);
	});

document.getElementById("choice").addEventListener("change", cambio);

function cambio(){
	if(choice.value === "Fireworks"){
		$(".displayType").removeClass("hidden").addClass("show");
		$(".displayDemo").removeClass("show").addClass("hidden");

	}else if (choice.value === "Demolition"){
		$(".displayDemo").removeClass("hidden").addClass("show");
		$(".displayType").removeClass("show").addClass("hidden");

	}
};

/*Promise.all([])
.then( () => {
	function here();
})*/

// Promise.all([getCategories(), getProducts(), getTypes()])
// .then( (allTheStuff) => {
// 	console.log(allTheStuff);
// })