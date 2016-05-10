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
        paramState.params(),
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
    },
    'click .dropdown-menu li'(event, data) {
      if (paramState.params().searchBy == "createdAt") {
        console.log("created");
      }
    }
  },

  onCreated() {
    let self = this;
    self.autorun(function(){
      self.subscribe(
        'invoiceTickets',
        paramState.params(),
        self.state.itemsLimit()
      );
    });
  },
});
