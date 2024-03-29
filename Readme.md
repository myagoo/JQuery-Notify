#JQuery Notifier Plugin
Display notifications one at a time using this JQuery plugin.

Demo [here] (http://jsfiddle.net/myagoo/y7tMQ/1/).

## Features
 - Notifications are queued so only one at a time will be displayed
 - Shipped with a "twitter-bootstrap alert" like style
 - Lightweight
 - Click on the notification to stop the waiting time and go to the next notification
 - Do nothing more than display a message in a div, customization is yours

## Usage
Here is an example code :

	$.notify({
		title: 'My title here', //(String) (Optional) Your notification title
		type: 'success', //(String) (Optional) Your notification type (will be used as class for your notification)
		message: 'My message here', //(String) Your notification message
		delay: 1000 //(Integer) (Optional) (Default=2000) Amount of time in millisecond the notification will be displayed (plus the animations time)
		element: '#notify-element', //(String/DOM Element) (Default="#notifier") Element(s) to receive your notification, if not found, will create or use "#notifier"
		className: 'alert' //(String) (Optional) Add this class to your notification, may be usefull to match your alert message style for example
	});

## Roadmap
 - Event triggering when queue is empty
 - May be callbacks (I don't see the point right now)
 - Customizable animations

## Authors
Millagou Benjamin
