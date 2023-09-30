# Password Generator

## Webpage Description
This is a password generator. When the user clicks on the "Generate Password" button, they are presented with a series of prompts for password criteria.

The password criteria include:
- Picking a length between 8 and 128 characters
- Include lowercase characters?
- Include uppercase characters?
- Include numbers?
- Include special characters?

The input by the user is then validated.
- If the user cancels out of picking a password length, the prompt window closes and no password is generated. 
- If the user enters a string, number lower then 8, number higher then 128, OR a number that not a whole number, they are alerted of this and asked to enter a new number.

Once validated, the password generator will first make sure that one character of each type is selected and added to the start of the password. Then the remaining characters of the password are randomly picked out of any character type the user has specified.

The password is then written to the page inside of the box above the "Generate Password" button.


## Link to Website
The deployed website can be accesed [here](PENDING LINK)


## Acknowledgements
- Gary Almes - provided the class the bones of the generateRandomNumber() function.


## Site Preview
The following image shares the web application's apperance:
<br>

![Image preview of what the password generator website looks like](./images/)
