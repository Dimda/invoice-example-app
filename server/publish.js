Meteor.publish('invoiceTickets', function(){
  return InvoiceTickets.find();
});
