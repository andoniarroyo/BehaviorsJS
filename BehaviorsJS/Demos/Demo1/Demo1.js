var demo1ViewModel = (function () {
    var
        description = ko.observable(),
        count = 1,
        changeDescription = function () {
            description(count + ' testName too long to show it');
            count++;
        };
    return {
        description: description,
        changeDescription: changeDescription
    };
})();
