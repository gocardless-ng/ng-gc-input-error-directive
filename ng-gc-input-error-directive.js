(function(){ 'use strict';
'use strict';

angular.module('gc.inputErrorDirective', [
  'input-error-template.html'
]).directive('inputError',
  function inputErrorDirective() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'input-error-template.html',
      scope: {
        errors: '=',
        field: '@'
      }
    };
  });

angular.module('input-error-template.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('input-error-template.html',
    '<div><div class="error-label" ng-show="errors[field]" ng-repeat="error in errors[field]">{{ error }}</div></div>');
}]);

})();