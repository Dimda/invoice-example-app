TemplateController('top_buttons', {
  helpers: {
    filter() {
      return FlowRouter.getParam("filter");
    },
    today() {
      return generateLink("today", undefined, undefined, undefined);
    },
    week() {
      return generateLink("week", undefined, undefined, undefined);
    },
    month() {
      return generateLink("month", undefined, undefined, undefined);
    },
    all() {
      return generateLink("all", undefined, undefined, undefined);
    },
  },
});
