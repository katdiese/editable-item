app.directive("makeEditable", function() {
  return {
    restrict: 'A',
    transclude: true,
    templateUrl: '../partials/main.html',
    link: function(scope, element, attrs) {
      scope.save = false;
      scope.editing = false;
      scope.switchEditing = function() {
          scope.editing = !scope.editing;
          scope.save = !scope.save;
        }
    }
  }
})