FlowRouter.route('/', {
  name: 'InvoiceTickets',
  triggersEnter: [function(context, redirect) {
    redirect('/today?sortBy=createdAt&sortOrder=1&searchBy=invoiceNumber');
  }]
});

FlowRouter.route('/:filter', {
  name: 'InvoiceTickets',
  action: function(params, queryParams) {
    BlazeLayout.render('invoice_tickets');
  }
});

generateLink = function(filter = FlowRouter.getParam("filter"),
                        sortBy = FlowRouter.getQueryParam("sortBy"),
                        sortOrder = FlowRouter.getQueryParam("sortOrder"),
                        searchBy = FlowRouter.getQueryParam("searchBy")){
  let post = this;
  let params = {filter: filter};
  let queryParams = {
    sortBy: sortBy,
    sortOrder: sortOrder,
    searchBy: searchBy
  };
  let routeName = "InvoiceTickets";
  let path = FlowRouter.path(routeName, params, queryParams);
  return path;
};

paramState = {
  getParam: function(paramName){
    let param = FlowRouter.getParam(paramName);
    return param;
  },
  getQueryParam: function(queryName){
    let queryParam = FlowRouter.getQueryParam(queryName);
    return queryParam;
  },
  params: function(){
    return {
      ["filter"]: this.getParam("filter"),
      ["sortBy"]: this.getQueryParam("sortBy"),
      ["sortOrder"]: this.getQueryParam("sortOrder"),
      ["searchBy"]: this.getQueryParam("searchBy"),
      ["searchQuery"]: this.getQueryParam("searchQuery"),
    }
  },
}
