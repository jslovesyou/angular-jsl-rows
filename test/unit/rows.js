'use strict';

describe('Directive: rows', function () {
	beforeEach(module('angularRowsApp'));



	function _createItems(numberOfItems) {
		var items = [];
		for (var i = 0; i < numberOfItems; i++) {
			items.push(i + 1);
		}
		return items;
	}

	function _createInjectable(items, columns) {
		var injectable;

		var element = angular.element('<div jsl-rows="items" jsl-rows-columns="' + columns +
			'">' +
			'<ul ng-repeat="row in rows">' +
			'<li>' +
			'<span ng-repeat="column in row">' +

			'</span>' +
			'</li>' +
			'</ul>' +
			'</div>');

		var injectFunction = function ($rootScope, $compile) {

			var scope = $rootScope;

			scope.items = items;

			$compile(element)(scope);
			scope.$digest();

		};
		injectable = {
			element: element,
			injectFunction: injectFunction
		};
		return injectable;
	}



	it("should have the correct amount of albums in the list", function () {
		var injectable = _createInjectable(_createItems(7), 4);
		var element = injectable.element;
		inject(injectable.injectFunction);
		var list = element.find('li');
		expect(list.length)
			.toBe(2);
	});

	it("each item in the list should have the correct length", function () {

		var injectable = _createInjectable(_createItems(7), 4);
		var element = injectable.element;
		inject(injectable.injectFunction);
		var list = element.find('li');
		var row1 = angular.element(list[0])
			.find('span');
		var row2 = angular.element(list[1])
			.find('span');
		expect(row1.length)
			.toBe(4);
		expect(row2.length)
			.toBe(3);
	});

	it("each item in the list should have the correct length", function () {
		var injectable = _createInjectable(_createItems(15), 3);
		var element = injectable.element;
		inject(injectable.injectFunction);
		var list = element.find('li');
      expect(list.length)
        .toBe(5);
	});
});
