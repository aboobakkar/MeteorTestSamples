

import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
 
import { Tasks } from '../api/tasks.js';
import './body.html';

/*Router.route('/', function () {
  this.render('Details', {
    data: function () { return Tasks.findOne({_id: this.params._id}); }
  });
});
   */

Iron.utils.debug = true;

Router.route('/Employee/:text', {
    name: 'Employee',
    template: 'Employee',
    data: {
      
      title: 'Employee Title',
       data: function () { return Tasks.find(); }


 /* data: function () {
   
        var aboo = this.params._id;
        return Tasks.findOne({ _id:aboo });

  
    },
  */
}
});


Router.route('/', function () {
  this.layout('ApplicationLayout', {
    
    data: {
      title: 'Main Title'
    }
  });

  
});



/*Router.route('/two', function () {
  this.layout('ApplicationLayout', {
    // set a data context for the whole layout
    data: {
      title: 'Master Title'
    }
  });

  // override the layout data context with a specific
  // data context for the main region.
  this.render('PageTwo', {
    data: {
      title: 'Region Specific Title'
    //  'title': function(){
      //  return Tasks.find({}, {sort: {name: 1}});
    }
  });
});

*/
 


Template.ApplicationLayout.helpers({

   tasks() {

    return Tasks.find({});

  },

});

Template.ApplicationLayout.events({
 
  
    'click a': function (event) {
    console.log(event.currentTarget.id);
  }
});


//Template.Employee.helpers({
   // data: function () { return Tasks.find(); }
  
//data: function () {
   //     var aboo = this.params._id;
   //     return Tasks.findOne({ _id: aboo });
  
  //  },
  

/*tasks() {

    return Tasks.find({});

  }, */
  //list:function(){
 //   return session.get("currentId");
    
 // }
//});






