InvoiceTickets = new Mongo.Collection('invoiceTickets');

InvoiceTickets.byTimeRange = function(params, limit){
  let sortQuery = {};
  sortQuery[params.sortBy] = parseInt(params.sortOrder);

  let searchQuery = {};
  if (params.searchQuery) {
    if (params.searchBy == "total") {
      searchQuery[params.searchBy] = parseInt(params.searchQuery);
    } else {
      searchQuery[params.searchBy] = { "$regex": "^" + params.searchQuery };
    }
  }

  let start = new Date();
  switch (params.filter) {
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
      return InvoiceTickets.find(searchQuery, {sort: sortQuery, limit: limit});
      break;
  }

  if (isEmpty(searchQuery)) {
    return InvoiceTickets.find(
      {"createdAt": {$gte: new Date(start)}},
      {sort: sortQuery, limit: limit}
    );
  } else {
    return InvoiceTickets.find(
      searchQuery,
      {"createdAt": {$gte: new Date(start)}},
      {sort: sortQuery, limit: limit}
    );
  }

  function isEmpty(object) {
    for(var key in object) {
      if(object.hasOwnProperty(key)){
        return false;
      }
    }
    return true;
  }
};
