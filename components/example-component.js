function register(module) {
  module.component('exWebpack', {
    templateUrl: '/components/example-component.html',
    controller: Ctrl
  });
}

function Ctrl(brAlertService) {
  var self = this;

  self.addError = function() {
    console.log('Adding Error');
    brAlertService.add('error', 'You made an error!');
    console.log('Done.');
  };
}

module.exports = register;
