angular.module('app').value('mvToastr', toastr);

angular.module('app').factory('mvNotify', function(mvToastr) {
    return {
        notify: function(msg) {
            mvToastr.success(msg);
            console.log(msg);
        },
        error: function(msg) {
            mvToastr.error(msg);
            console.log(msg);
        }
    }
});