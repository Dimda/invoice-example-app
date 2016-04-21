TemplateController('invoice_tickets', {
  private: {
    itemsIncrement: 30,
  },

  state: {
    itemsLimit: 30
  },

  helpers: {
    tickets() {
      return InvoiceTickets.byTimeRange(
        FlowRouter.getParam("filter"),
        FlowRouter.getQueryParam("sortBy"),
        FlowRouter.getQueryParam("sortOrder"),
        Template.instance().state.itemsLimit()
      );
    },
    formatDate(date) {
      return moment(date).format("MM-DD-YYYY");
    },
    isVisible() {
      return Template.instance().state.itemsLimit() <
            ReactiveMethod.call("getDocumentCount", FlowRouter.getParam("filter"));
    },
  },

  events: {
    'becameVisible'(event, data) {
      this.state.itemsLimit(this.state.itemsLimit() + this.itemsIncrement);
    }
  },

  onCreated() {
    let self = this;
    self.autorun(function(){
      self.subscribe(
        'invoiceTickets',
        FlowRouter.getParam("filter"),
        FlowRouter.getQueryParam("sortBy"),
        FlowRouter.getQueryParam("sortOrder"),
        self.state.itemsLimit()
      );
    });
  },
});
