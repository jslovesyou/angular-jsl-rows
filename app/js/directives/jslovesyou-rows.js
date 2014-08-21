angular.module('jslRows', [])
	.directive('jslRows', function () {
		'use strict';
		return {

			restrict: 'A',

			scope: true,

			controller: function ($scope, $element, $attrs) {

				var numberOfColumns = $attrs.jslRowsColumns;
				var rowsAs = $attrs.jslRowsAs ? $attrs.jslRowsAs : 'rows';
				var arrayRows = $scope[rowsAs] = [];

				var splitTarget = function (target) {
					arrayRows.length = 0;

					angular.forEach(target, function (item, index) {
						if (index % numberOfColumns === 0) {
							arrayRows.push([]);
						}
						arrayRows[arrayRows.length - 1].push(item);
					});
				};

				$scope.$watchCollection($attrs.jslRows, function (newish) {
					splitTarget(newish);
				});
			}
		};
	});
