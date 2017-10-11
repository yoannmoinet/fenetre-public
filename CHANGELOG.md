## 0.4.6 (2017-10-11)

### Bug Fixes

* fix: another destroyed window error
* fix: update destroyed window detection logic

### Features

* feat: new extension system

## 0.4.5 (2017-10-11)

### Bug Fixes

* fix: change app type from helper to real app
* fix: do not download unsupported files, instead show a message
* fix(onboarding): change misleading message in first popup

### Features

* feat: add flash support

## 0.4.3 (2017-10-11)

### Bug Fixes

* fix: bug when accessing destroyed windows
* fix(onboarding): do not steal focus with onboarding popup
* fix: update firefox extension link in settings (thanks Hates_)
* fix(about): better logo animation
* fix(browser): will now open with the extension more consistently
* fix(entitlements): remove server entitlement
* fix(free): no more dual content playing at the same time
* fix(markdown): remove leak of markdown viewer to every text files
* fix(parser): keep the port of the url (thanks round, martinbalfanz)
* fix(pro): remove duplicate shortcut registration
* fix(resize): avoid any errors with NaN
* fix(settings): do not erase shortcuts when not set after saving settings
* fix(twitch): remove mobile view for Twitch (thanks dfcarpenter)
* fix(web): remove useragent attribute if null (thanks  codeurge)
* fix(window): avoid async access to window if destroyed

### Features

* feat(free): make 'Go Pro' popup non perpetual, come once, and go forever
* feat: add context menu and enable copy/paste
* feat: add Fenêtre to the 'Open With' of Finder and support file opening

# 0.4.0 (2017-10-04)

### Features

* feat(free): allow browser extension to open through free app

## 0.3.9 (2017-10-03)

### Bug Fixes

* fix(pro): remove Go Pro link from tray

### Features

* feat: add a 'What's New?' link in the tray
* feat: better handle image resizing

## 0.3.8 (2017-10-03)

### Bug Fixes

* fix(free): focus and show when opening a new url on a hidden window
* fix: not set undef IS_PRODUCTION flags, set at build time
* fix: update styling to better handle scrolling and github md style
* fix(parser): catch error when unresponding source
* fix(youtube): better youtu.be handling and bigger sizing

### Features

* feat(free): add Go Pro link in the tray
* feat(free): make markdown preview a free feature

