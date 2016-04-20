TemplateController('TopButtons', {
  helpers: {
    filter() {
      return FlowRouter.getParam("filter");
    },
    today() {
      return generateLink("today", undefined, undefined);
    },
    week() {
      return generateLink("week", undefined, undefined);
    },
    month() {
      return generateLink("month", undefined, undefined);
    },
    all() {
      return generateLink("all", undefined, undefined);
    },
  },
});
