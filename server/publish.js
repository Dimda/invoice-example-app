Meteor.publish('invoiceTickets', function(filter, sortBy, sortOrder){
  return InvoiceTickets.byTimeRange(filter,sortBy,sortOrder);
});
