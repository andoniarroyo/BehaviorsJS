ko.subscribable.fn.addBehavior = function (behavior, $element) {
    var property = this;
    property.subscribe(function () {
        behaviors.applyBehaviors(behavior, $element);
    });
};