InvoiceTickets = new Mongo.Collection('invoiceTickets');

InvoiceTickets.byTimeRange = function(filter, sortBy, sortOrder){
  let sortQuery = {};
  sortQuery[sortBy] = sortOrder;
  let startDate;
  let endDate = new Date();
  switch (filter){
    default:
    case "today":
      startDate = new Date(endDate.setDate(endDate.getDate()-1));
      break;
    case "week":
      startDate = new Date(endDate.setDate(endDate.getDate()-7));
      break;
    case "month":
      startDate = new Date(endDate.setDate(endDate.getDate()-30));
      break;
    case "all":
      return InvoiceTickets.find({}, {sort: sortQuery});
      break;
  }

  return InvoiceTickets.find(
    {"createdAt": {$gte: startDate}},
    {sort: sortQuery}
  );
};
