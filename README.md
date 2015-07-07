# Mobile Smartbanner
## What is this?
Add a native-looking smartbanner to promote your Google Play and App Store app on your mobile website. There are no dependencies required! This library works on any mobile web browser except Safari, as smartbanners are native on Safari for iOS.  

Inspired by https://github.com/jasny/jquery.smartbanner

## How do I use this?
Add the following 2 lines to your HTML or template file:

```
<link rel="stylesheet" type="text/css" href="src/smartbanner.css">
<script src="src/smartbanner.js" type="text/javascript"></script>
```

Now render the banner in your Javascript file, using this example as a template:

```
var options = {
	app_store_id: '934520071',
	play_store_id: 'com.reconinstruments.jetandroid',
	app_name: 'Recon Engage',
	app_author: 'Recon Instruments Inc.',
	app_icon: 'http://i.imgur.com/hnuKdBf.png',
	price: '$0.99',
	max_resolution: 480,
};

MobileBanner.render(options);
```

## What options are available with htis?

This is the full list of options, and their defaults:
- **app_store_id**: Apple App store ID. **Default**: None.
- **play_store_id**: Google Play store ID/package name. **Default**: None.
- **app_name**: Name of the app'. **Default**: None.
- **app_author**: Author of the app. **Default**: None.
- **app_icon**: URL to icon. **Default**: None.
- **price**: Price of the app. **Default**: Free.
- **max_resolution**: Max device resolution at which to show the smartbanner. **Default**: 480px.
- **icon_dimension**: Desired size of the icon. **Default**: 70px.
- **height**: Height of the smartbanner, exluding padding. **Default**: 70px.
- **vertical_padding**: Padding at top and bottom of smartbanner. **Default**: 10px.
