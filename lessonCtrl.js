angular.module('directivePractice').controller('mainCtrl', function($scope) {
  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

  $scope.announceDay = function(lesson, day) {
    if (!day) {
      alert(lesson + ' has not been scheduled yet.');
    } else {
      alert(lesson + ' is active on ' + day + '.');
    }

  }
})
