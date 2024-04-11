# Graphical Passwoord for Underaged (GPU)

Graphical Password for Underaged is a project that is developed to provide an additional layer of security against alphanumeric passwords by using images as passwords for the childrens to make them easier to memories the credential. A user can create a unique and personalized image password by searching and selecting images related to anything they want to setup, along with the combination of traditional alphanumeric password for enhanced security. This project is developed using the MERN stack (MongoDB, Express, React, Node.js) along with Tailwind CSS.


## Resistance to Popular Attacks
### Bruteforce
#### After reaching max tries, the user will be notified via message through email. And the further authentication through the generic URL/website is disabled for that user account, instead, they have to use the link that will be sent by the company in the notification email. This also lets the legitimate user know about the adversary.

### Shoulder Surfing
#### Shoulder surfing is a type of social engineering technique used to obtain information such as personal identification numbers (PINs), passwords and other confidential data by looking over the victim's shoulder. The system we adopt is similar to the Phone pattern system. The pattern is invisible on the screen when the users draw it. This makes it incredibly tough for the adversary to see the images on the grid that the user clicks.

### Spyware
#### Graphical password systems resist spyware more easily than regular passwords. Key-loggers secretly capture keystrokes and transfer, but if the spyware wants to track the mouse movements, it can be tracked, but the adversary wouldn’t know which part of the mouse event is actually the graphical password. The timeline vs mouse-event graph is too difficult to get the pattern.

### Phishing
#### Since the adversary is made to believe that the password is a set of images, it’s not possible to make a fake page, since the adversary thinks he doesn’t know the images. Moreover, we restrict the user to one attempt and suggest the user to give a fake password every time so that he triggers the server to send and URL in email so that he can log in through the legitimate login page, and the adversary cannot send the URL to users from a legitimate server. However, when the adversary knows the technique this attack might be still possible.
