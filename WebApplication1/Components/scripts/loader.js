
define(['jquery', 'knockout'], function ($, ko)
{
    ko.components.register('usersignup', { //usersignup.js
        require: 'scripts/usersignup'
    });
    ko.applyBindings();
});
