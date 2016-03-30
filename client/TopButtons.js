Template.TopButtons.helpers({
  filter: function(){
    return FlowRouter.getParam("filter");
  },
  today: function(){
    return generateLink("today", undefined, undefined);
  },
  week: function(){
    return generateLink("week", undefined, undefined);
  },
  month: function(){
    return generateLink("month", undefined, undefined);
  },
  all: function(){
    return generateLink("all", undefined, undefined);
  },
});
