(function () {
    'use strict';

	describe('Array of Objects Test', function () {
        it('should be an array of objects', function () {
        	expect(traveling).to.be.an('array');
        	expect(traveling[0]).to.be.an('object');
       	});
    });

    describe('List Tests', function () {
        it('should add a list to the DOM', function () {
        	expect($('ul.countries').length).equal(1);
        });

        it('should have multiple items on the list', function () {
        	expect($('li.country').length).to.equal(4);
        });

    });

    describe('Container Test', function (){
    	it('should have a container with a class of wrapper', function (){
    		expect($('.wrapper')).to.be.ok;
    	});
    });

    describe('Searchbar Test', function (){
    	it('should have an input field', function (){
    		expect($('input[type=search]')).to.be.ok;
    	});
    });

    describe('Filter Test', function (){
    	it('should update the number of list items being displayed when search bar is used', function (){
    		expect($('li.country').length).to.not.equal(4);
    	});
    })
})();
