Meteor.publish('invoiceTickets', function(filter, sortBy, sortOrder, limit){
  return InvoiceTickets.byTimeRange(filter, sortBy, sortOrder, limit);
});
