angular.module('app').value('cbToastr', toastr);

angular.module('app').factory('cbNotify', function(cbToastr) {
    return {
        notify: function(msg) {
            cbToastr.success(msg);
            console.log(msg);
        },
        error: function(msg) {
            cbToastr.error(msg);
            console.log(msg);
        }
    }
});