Meteor.publish('invoiceTickets', function(params, limit){
  return InvoiceTickets.byTimeRange(params, limit);
});

Meteor.methods({
    'getDocumentCount': function(filter){
        let start = new Date();
        let searchQuery = {};
        if(paramState.params.searchQuery){
          searchQuery[paramState.params.searchBy] = paramState.params.searchQuery;
        }
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
            return InvoiceTickets.find(searchQuery).count();
            break;
        }
        return InvoiceTickets.find({"createdAt": {$gte: new Date(start)}}).count();
    }
});
