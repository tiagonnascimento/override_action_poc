({

    doInit: function(cmp) {
        var action = cmp.get("c.getUserProfileName");
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {

                const profileName = response.getReturnValue();

                    // determining the profiles that will trigger the custom flow
                if (profileName == "System Administrator") {
                    // Find the component whose aura:id is "flowData"
                    var flow = cmp.find("flow");
                    // In that component, start your flow. Reference the flow's API Name.
                    flow.startFlow("HelloFlow");

                    // navigating to the new page and entering in an infinite loop - this will not work as intended
                } else {

                    var navService = cmp.find("navService");
                    var pageRef = {
                        type: "standard__objectPage",
                        attributes: {
                            objectApiName: "Account",
                            actionName: "new"
                        },
                        state: {
                        }
                    }

                    navService.navigate(pageRef);

                }

             }
          });
        $A.enqueueAction(action);        
    }
    
})
