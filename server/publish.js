Meteor.publish('invoiceTickets', function(filter, sortBy, sortOrder, limit){
  return InvoiceTickets.byTimeRange(filter, sortBy, sortOrder, limit);
});

Meteor.methods({
    'getDocumentCount': function(filter){
        let start = new Date();
        switch (filter){
          default:
          case "today":
            start.setDate(start.getDate()-1);
            break;
          case "week":
            start.setDate(start.getDate()-7);
            break;
          case "month":
            start.setDate(start.getDate()-30);
            break;
          case "all":
            return InvoiceTickets.find().count();
            break;
        }
        return InvoiceTickets.find({"createdAt": {$gte: new Date(start)}}).count();
    }
});
