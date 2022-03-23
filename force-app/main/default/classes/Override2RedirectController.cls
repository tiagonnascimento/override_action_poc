public with sharing class Override2RedirectController {

    @AuraEnabled
    public static string getUserProfileName(){
        return [SELECT Name FROM Profile WHERE Id = :UserInfo.getProfileId()].Name;
    }
    
}
