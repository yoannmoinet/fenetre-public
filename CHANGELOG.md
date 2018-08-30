# 0.6.0 (2018-08-30)

### Bug Fixes

* fix(seethrough): activate seethrough at the correct distance
* fix(shortcuts): support different keyboard layouts
* fix(youtube): update youtube url parser to new url schemas

### Features

* feat(pro): add config for default position
* feat(pro): add favorites
* feat(pro): add hotkeys to move a Fenêtre on a grid
* feat(video): add "Move your window" video to help menu

## 0.5.6 (2018-04-04)

### Bug Fixes

* fix(i18n): add missing locales and make the file readable by translators
* fix(i18n): update wrong key for settings save fail
* fix(lite): reset go pro window with all onboarding messages
* fix(parser): update twitch parser for new urls format
* fix(resize): safer resize script

### Features

* feat(i18n): allow locale entries to have description and screenshots
* feat(window): fenetre visible on all spaces

## 0.5.5 (2018-02-24)

### Bug Fixes

* fix(mobile): remove mobile optimised view
* fix(popup): make video clickable in onboarding popup

## 0.5.4 (2018-01-27)

### Bug Fixes

* fix(plyr): correctly target plyr instance instead of array

### Features

* feat: add copy paste shortcuts and others

## 0.5.3 (2017-12-14)

### Bug Fixes

* fix(i18n): add missing translations for media errors
* fix: more async access of destroyed browserwindow handling
* fix(viewer): no more full refresh when opening more than 1 window

### Features

* feat(about): more info on the about window
* feat(tray): right-click opens the menu
* feat(viewer): add a better custom video player
* feat(window): no move/resize window when user did it first

## 0.5.2 (2017-12-11)

### Bug Fixes

* fix(image): handle image errors

### Features

* feat: better url parser (now support url not sending head for example)
* feat(video): decode way more video formats
* feat: open a new window when link with target=_blank

## 0.5.1 (2017-11-16)

### Bug Fixes

* fix: error handler in both renderer and main processes
* fix: update pro checking for actions
* fix(i18n): add missing locales and fix previous ones

### Features

* feat(free): new go pro video
* feat(free): update display of settings

# 0.5.0 (2017-11-16)

### Bug Fixes

* fix: safe window event handlers in case of destroyed windows
* fix(clipboard): remove latency when using clipboard's value
* fix(extension): handle errors from browser extension listener
* fix(onboarding): make the popup larger

### Features

* feat: add help submenu with videos
* feat(i18n): add localisation for French and English
* feat(tray): show all menus on the Free version
* feat(ui): slight design update of the top-bar
* feat(viewer): remove some of the asynchronous window's id logic
* feat: make the app single instance
* feat: OSX High Sierra support

## 0.4.7 (2017-10-22)

### Bug Fixes

* fix: do not register mouse while in see-through mode (thanks altermatte)

### Features

* feat: add a setting to control see-through mask radius
* feat: add description in settings
* feat: add setting to hide dock icon (thanks typicaltechtran JustinMoodie)
* feat: add settings to only activate opacity on hover
* feat: better class helper
* feat: make a google search from the clipboard if not a parsable URL

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

