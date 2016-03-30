InvoiceTickets = new Mongo.Collection('invoiceTickets');

InvoiceTickets.byTimeRange = function(filter, sortBy, sortOrder){
  let sortQuery = {};
  sortQuery[sortBy] = sortOrder;
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
      return InvoiceTickets.find({}, {sort: sortQuery});
      break;
  }
  return InvoiceTickets.find(
    {"createdAt": {$gte: new Date(start)}},
    {sort: sortQuery}
  );
};
