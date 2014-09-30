'use strict';

var traveling = [
    {name: "Ecuador" },
    {name: "Japan" },
    {name: "Jamaica" },
    {name: "Italy" }
];

$('body').append("<div class='wrapper'></div>");
// $('.wrapper').prepend("<input class='searchbar' type='search'></input>");

var ListView = Backbone.View.extend({
    tagName: 'ul',
    className: 'countries',

	render: function () {
		$('.wrapper').append(this.el);
	}
});

var ItemView = Backbone.View.extend({
	tagName: 'li',
	className: 'country',

	initialize: function () {
	},

	render: function (options) {
		this.name = options.name;
		this.$el.text(this.name);
		$('ul').append(this.el);
	},

});

var SearchView = Backbone.View.extend ({
	tagName:'input',
	attributes:{'type':'search', 'placeholder':'Search For Stuffs'},
	className:'searchbar',
	
	initialize: function () {
		this.$el.on('change', this.filter)
	},

	filter: function(){
		var b = _.filter(traveling, function(country) {
			return country.name === $('.searchbar').val();
		});
	},
	
	render: function() {
		$('.wrapper').prepend(this.el);
	}
});


var listView = new ListView();
listView.render();

var searchView = new SearchView();
searchView.render();

_.each(traveling, function(travel) {
	var itemView = new ItemView();
	itemView.render(travel);
});





