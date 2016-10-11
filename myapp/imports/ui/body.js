

import { Template } from 'meteor/templating';

 
import { Tasks } from '../api/tasks.js';
import './body.html';

/*Router.route('/', function () {
  this.render('Details', {
    data: function () { return Tasks.findOne({_id: this.params._id}); }
  });
});
   */
/*
Iron.utils.debug = true;

Router.route('/Register', {
    name: 'Register',
    template: 'Register',
    data: {
      title: 'Master Title'
    },
   //  tasks() {

   // return Tasks.find({});

 // },

});


Router.route('/', function () {
  this.layout('ApplicationLayout', {
    //set a data context for the whole layout
    data: {
      title: 'Master Title'
    }
  });

  // will just get the data context from layout
  this.render('PageOne');
});

Router.route('/two', function () {
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
 
Template.body.helpers({

   tasks() {

    return Tasks.find({});

  },
'list': function(){
        return Tasks.find({}, {sort: {name: 1}});
    }
});

Template.Register.helpers({

tasks() {

    return Tasks.find({});

  },
});



Template.body.events({

 

});
Template.Register.events({
   'click': function(){
        console.log("You clicked something");
    }
})

