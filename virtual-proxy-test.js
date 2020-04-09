define( ["qlik", "text!./template.html"],
	function ( qlik, template ) {

		return {
			template: template,
			paint: function () {
				return qlik.Promise.resolve();
			},
			controller: ['$scope', function ( $scope ) {
				$scope.prefix = qlik.getGlobal().session.options.prefix;
			}]
		};

	} );

