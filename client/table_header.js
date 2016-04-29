TemplateController('table_header', {
  helpers: {
    sortBy() {
      return FlowRouter.getQueryParam("sortBy");
    },
    sortOrder() {
      return FlowRouter.getQueryParam("sortOrder");
    },
    totalSort() {
      if(FlowRouter.getQueryParam("sortOrder") == 1){
        return generateLink(undefined, "total", -1, undefined);
      }else{
        return generateLink(undefined, "total", 1, undefined);
      }
    },
    createdAtSort() {
      if(FlowRouter.getQueryParam("sortOrder") == 1){
        return generateLink(undefined, "createdAt", -1, undefined);
      }else{
        return generateLink(undefined, "createdAt", 1, undefined);
      }
    }
  },
});
