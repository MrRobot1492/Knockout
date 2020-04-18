//The ViewModel
var viewModelPerson = function()
{
    var self=this;
    self.firstName= ko.observable("Matt"),
    self.lastName= ko.observable("Daemon"),
    self.fullName= ko.computed({
        read: function () {
            return self.firstName() + " " + self.lastName();
        },
        write: function (val) {
            var arrName = val.split(' ');
            self.firstName(arrName[0]);
            self.lastName(arrName[1]);
        }
    });
}

ko.applyBindings(viewModelPerson);

console.log(ko.isComputed(fullName));
//returns true for observables, observableArrays, and all computed observables.
console.log(ko.isObservable(firstName));
console.log(ko.isWriteableObservable(firstName)); 
//returns true for observable, observableArrays, and writeable computed observables.
console.log(ko.isWriteableObservable(fullName));