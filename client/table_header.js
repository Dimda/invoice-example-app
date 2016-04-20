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
        return generateLink(undefined, "total", -1);
      }else{
        return generateLink(undefined, "total", 1);
      }
    },
    createdAtSort() {
      if(FlowRouter.getQueryParam("sortOrder") == 1){
        return generateLink(undefined, "createdAt", -1);
      }else{
        return generateLink(undefined, "createdAt", 1);
      }
    }
  },
});
