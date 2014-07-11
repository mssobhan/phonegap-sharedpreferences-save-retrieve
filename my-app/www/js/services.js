var domain = "http://xxxx";

function getCookie(name) {
    var r = document.cookie.match("\\b" + name + "=([^;]*)\\b");
        return r ? r[1] : undefined;
        }

angular.module('services',['ngResource'])

.factory('MobileAsset', ['$resource','$rootScope',
  function($resource, $rootScope){
      return $resource(domain+'/app/assets/list', {}, {
            query: {method:'GET', params:{_xsrf:getCookie("_xsrf")}, isArray:true}
        });
}]);