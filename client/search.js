TemplateController('search', {
  helpers: {
    searchBy() {
      return FlowRouter.getQueryParam("searchBy");
    },
    invoiceNumber() {
      return generateLink(undefined, undefined, undefined, "invoiceNumber");
    },
    email() {
      return generateLink(undefined, undefined, undefined, "email");
    },
    total() {
      return generateLink(undefined, undefined, undefined, "total");
    }
  },
  events: {
    "keyup .form-control" (event, instance) {
      let target = $(event.target);
      if(event.which === 13) {
        let path = generateLink(undefined, undefined, undefined, undefined) + "&searchQuery=" + target.val();
        FlowRouter.go(path);
      }
    }
  }
});
