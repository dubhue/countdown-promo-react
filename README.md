# countdown-promo-react
Countdown Promo Bar Web Component

Standalone React component for promotional countdown bar. 

Accepts:

* message: The promotional text to display to the user.
* btnLabel: The text label for the button.
* link: The url location to navigate to when clicked
* endTime: ISO timestamp for when the promo ends.

Component has functioning close button and responds to column layout on screens less than 600px wide. Once closed, the bar will not reappear during the same browsing session (close browser and the bar will reappear until closed again).

See live implementation here: [https://codepen.io/peterbdub/pen/GRKaWYW](https://codepen.io/peterbdub/pen/GRKaWYW)

The live implementation has generic "Product" name and link for obfuscation purposes. In production, the anchor link element would likely be replaced with a react-router Link element for in-app linking. Use Bootstrap 4 grid.
