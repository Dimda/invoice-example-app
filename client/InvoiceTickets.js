Meteor.subscribe('invoiceTickets');

Template.InvoiceTickets.helpers({
  tickets: function(){
    return InvoiceTickets.find();
  },
  formatDate: function(date){
    return moment(date).format('MM-DD-YYYY');
  }
});
