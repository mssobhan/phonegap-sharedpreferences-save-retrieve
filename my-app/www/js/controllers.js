var domain = "http://xxxx";

angular.module('controllers', ['leaflet-directive','nvd3ChartDirectives'])


.controller('TestCtrl', function($scope,$rootScope,$ionicPopup,$state,$stateParams,$http) {
})
.controller('AppCtrl', function($scope) {
})
.controller('SetupCtrl', function($scope, $stateParams,$ionicPopup,$ionicPlatform,$state,$http) {

    
    $scope.saveChange = function(data){
        window.plugins.SharedPrefs.saveData(function(result){
            $ionicPopup.alert({"title":"Has it been saved? Ans:"+JSON.stringify(result)});
            $scope.save_result = result;
            return result;
        },"","FinderDemoPrefs","dummydata",data);
    }

    $scope.getChange = function(){
        window.plugins.SharedPrefs.getData(function(result){
            $ionicPopup.alert({"title":"Could I retrieve the data? Ans:"+result});
            $scope.result = result;
            return result;
        },"","FinderDemoPrefs","dummydata");

    }


});
