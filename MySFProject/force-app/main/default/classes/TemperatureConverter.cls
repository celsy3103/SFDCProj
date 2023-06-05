/**
 * @description       : This class is used to convert temperature from Celsius to Fahrenheit.
 * @author            : Diganta Das
 * @last modified on  : 06-02-2023
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class TemperatureConverter {
    @AuraEnabled
    /**
    * @description convertCtoF : This method is used to convert temperature from Celsius to Fahrenheit.
    * @param celsiusTemp
    * @return result
    */
    public static Decimal convertCtoF(Decimal celsiusTemp) {
        Decimal result;
        result = ((celsiusTemp * 9/5) + 32);
        return result;
    }
}