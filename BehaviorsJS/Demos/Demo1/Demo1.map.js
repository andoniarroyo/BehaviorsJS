// Set the related behaviors
//demo1ViewModel.description.addBehavior(behaviors.types.fadeIn, $('.fadeable'));
demo1ViewModel.description.addBehavior(behaviors.types.slideDown, $('.fadeable'));

ko.applyBindings(demo1ViewModel);