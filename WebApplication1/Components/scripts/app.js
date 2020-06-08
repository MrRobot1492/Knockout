
function usersignup (params) { // viewModel that can be an object or function
    firstname = ko.observable(params.firstname),
    lastname = ko.observable(params.lastname),
    email = ko.observable(params.email),
    password = ko.observable(),
    fullname = ko.pureComputed(function () {
        return this.firstname() + " " + this.lastname()
    })
}


var userSignupModel = function () {

    this.firstname = ko.observable("Kunwar"),
    this.lastname = ko.observable("Last Name"),
    this.email = ko.observable("you@email.com"),
    this.password = ko.observable(),
    this.fullname = ko.pureComputed(function () {
        return this.firstname() + " " + this.lastname()
    })
};


//1.FIELDSET COMPONENT
//ko.components.register('usersignup', {

//    template: { element: 'signup-template' },
//    viewModel: function (params) { // viewModel that can be an object or function
//        firstname = ko.observable(params.firstname),
//            lastname = ko.observable(params.lastname),
//            email = ko.observable(params.email),
//            password = ko.observable(),
//            fullname = ko.pureComputed(function () {
//                return this.firstname() + " " + this.lastname()
//            })
//    }
//});


////1.2 FIELDSET COMPONENT BY USING 'usersignup' IMPLICIT FUNCTION
//ko.components.register('usersignup', {

//    template: { element: 'signup-template' },
//    viewModel: usersignup
//});

////1.3 FIELDSET COMPONENT BY USING 'usersignup' VAR with INSTANCE
//ko.components.register('usersignup', {

//    template: { element: 'signup-template' },
//    viewModel:{ instance: usersignupModel} 
//});

//2.DIV, 3.CONTROL, 4.KO COMPONENTS
ko.components.register('usersignup', {

    template: '<fieldset>'+
        '<legend>'+
        'User Sign-up'+
    '</legend>'+
    '<p><input type="text" placeholder="First Name" data-bind="value:firstname" /></p>'+
    '<p><input type="text" placeholder="Last Name" data-bind="value:lastname" /></p>'+
    '<div data-bind="html: fullname"> </div>'+
    '<p><input type="email" placeholder="Email" data-bind="value:email" /></p>'+
    '<p><input type="password" placeholder="Password" data-bind="value:password" /></p>'+
    '<p><input type="button" value="Submit" value="Create Account" /></p>'+
    '<div>User Sign up Component</div>'+
    '</fieldset >',
    //viewModel: function (params) { // viewModel that can be an object or function
    //    firstname = ko.observable(params.firstname),
    //        lastname = ko.observable(params.lastname),
    //        email = ko.observable(params.email),
    //        password = ko.observable(),
    //        fullname = ko.pureComputed(function () {
    //            return this.firstname() + " " + this.lastname()
    //        })
    //}
    viewModel: usersignup
});