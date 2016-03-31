Template.InvoiceTickets.onCreated(function(){
  let self = this;
  self.autorun(function(){
    self.subscribe(
      'invoiceTickets',
      FlowRouter.getParam("filter"),
      FlowRouter.getQueryParam("sortBy"),
      FlowRouter.getQueryParam("sortOrder")
    );
  });
});

Template.registerHelper('equals', function(a, b){
  return a == b;
});

Template.InvoiceTickets.helpers({
  tickets: function(){
    return InvoiceTickets.byTimeRange(
      FlowRouter.getParam("filter"),
      FlowRouter.getQueryParam("sortBy"),
      FlowRouter.getQueryParam("sortOrder")
    );
  },
  formatDate: function(date){
    return moment(date).format("MM-DD-YYYY");
  },
});
