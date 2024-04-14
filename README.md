## Kitchen Sink 2.0

This rendition of the Kitchen Sink 2.0 introduces a specialized **PurgeTSS** Edition, incorporating advanced utility classes and the Animation module for an elevated development experience. Leveraging the power of **PurgeTSS**, this edition boasts enhanced styling capabilities and improved performance.

Furthermore, TiKit UI components have been seamlessly integrated, providing an additional layer of sophistication to the user interface. Developers can delve into the codebase, explore the nuances of **PurgeTSS** utilities, and contribute to making this version even more refined.

This project gives an overview of native components available in Titanium.
The components are grouped into multiple groups and can be logged in the "Logs" tab.
It also includes full support for iOS & Android.

![screenshot](screenshot.png)

### Features

- [x] Full ES6+ support
- [x] API Logging
- [x] Controls (Switch, Slider, Tabbed Bar, Text Field, Alerts, Dialogs, ...)
- [x] Views (Scroll View, List View, Image View, Blur View, Web View, ...)
- [x] Services (Twitter, Facebook)
- [x] Platform (Clipboard, URL-Schemes, Hyperloop, Databases, Geolocation, Camera, Gallery, ...)
- [ ] TODO: More Platform APIs (HTTP-Requests, Contacts, ...)

### Running the KitchenSink App

#### Via CLI

1.  Clone the repository:

        git clone https://github.com/tidev/kitchensink-v2

2.  To run it with `ti build` first import it to the platform:

        ti create --import --no-services

3.  Build to Simulator or Device:

        ti build -p ios [-T device]

### Contribution

Code contributions are greatly appreciated, please submit a new [pull request](https://github.com/tidev/kitchensink-v2/pull/new/master)!
