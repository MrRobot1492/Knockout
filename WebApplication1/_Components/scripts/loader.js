
define(['jquery', 'knockout'], function ($, ko)
{
   ko.components.register('usersignup', {
        require: 'scripts/usersignup'
    });
    ko.applyBindings();
});
