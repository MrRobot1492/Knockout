/*
var userSignupModel = function() {

    this.firstname = ko.observable("First Name"),
    this.lastname = ko.observable("Last Name"),
    this.email = ko.observable("you@email.com"),
    this.password = ko.observable(),
    this.fullname = ko.pureComputed(function () {
        return this.firstname() + " " + this.lastname()
    })
};
*/

function usersignup (params) { // viewModel that can be an object or function
    firstname = ko.observable(params.firstname),
    lastname = ko.observable(params.lastname),
    email = ko.observable(params.email),
    password = ko.observable(),
    fullname = ko.pureComputed(function () {
        return this.firstname() + " " + this.lastname()
    })
}

/*
var userSignupModel = function () {

    this.firstname = ko.observable("Kunwar"),
    this.lastname = ko.observable("Last Name"),
    this.email = ko.observable("you@email.com"),
    this.password = ko.observable(),
    this.fullname = ko.pureComputed(function () {
        return this.firstname() + " " + this.lastname()
    })
};
*/
/*
ko.components.register('usersignup', {

    template: { element: 'signup-template' },
    viewModel: { instance: userSignupModel },
   


});
*/
ko.components.register('usersignup', {

    template: { element: 'signup-template' },
    viewModel: {
        createViewModel:function(params,componentInfo){
          
          return usersignup(params) 
          
        }
    },
   


});