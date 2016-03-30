Template.TableHeader.helpers({
  sortBy: function(){
    return FlowRouter.getQueryParam("sortBy");
  },
  sortOrder: function(){
    return FlowRouter.getQueryParam("sortOrder");
  },
  totalSort: function(){
    if(FlowRouter.getQueryParam("sortOrder") == 1){
      return generateLink(undefined, "total", -1);
    }else{
      return generateLink(undefined, "total", 1);
    }
  },
  createdAtSort: function(){
    if(FlowRouter.getQueryParam("sortOrder") == 1){
      return generateLink(undefined, "createdAt", -1);
    }else{
      return generateLink(undefined, "createdAt", 1);
    }
  }
});
