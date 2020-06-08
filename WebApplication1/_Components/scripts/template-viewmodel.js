var userSignupModel = function (params) {

    firstname = ko.observable(params.firstname),
    lastname = ko.observable(params.lastname),
    email = ko.observable(params.email),
    password = ko.observable(),
    fullname = ko.pureComputed(function () {
        return this.firstname() + " " + this.lastname()
    })

};

ko.components.register('usersignup', {
    template: { element: 'signup-template' },
});
