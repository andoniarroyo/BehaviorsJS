var behaviors = (function () {
    var types = { fadeIn: 1, slideDown: 2 };
    var applyBehaviors = function (behavior, $element) {
        switch (behavior) {
        case types.fadeIn:
            $element.hide().fadeIn();
            break;
        case types.slideDown:
            $element.hide().slideDown();
            break;
        }
    };

    return {
        types: types,
        applyBehaviors: applyBehaviors
    };

})();