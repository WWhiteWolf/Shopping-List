# Session hand-off — Shopping List (iPhone)

This file is for the next sitting. It says what was done and what
still needs to be done. It is not the whole history. History lives
in `handoff-history.md` and is opened when something needs tracing.

A decision is written the moment it is made, in that turn.

## Where things stand

**4-Shopping** put the 6.5-inch screenshots in Connect, and Connect
took Add for Review (Patrick, 4-Shopping). Apple has the listing
for review. It is not live on the store yet. **3-Shopping** put
this folder in the GitHub repository Shopping-List, sent the
production builds, the cart picture, the listing name Shopping
with the subtitle Shopping List on your phone, and the privacy
and support pages (Patrick, 3-Shopping). A Release build is on
Patrick Murphy's iPhone and runs without the Mac.

## Standing rulings

- **The name is Shopping List. The badge under the icon is Shopping.**
  The App Store listing name is **Shopping**. The subtitle is
  **Shopping List on your phone**.
- **The housing, the look, and the work match Memory's Shopping List
  page**, except for the header changes named here.
- **There is no Home.** The left header flips between Shopping and
  Inventory.
- **There is no Settings page.** The two base themes stay. They are
  switched by Mystery's sun-and-moon theme button, in the header
  beside + Add. That button shows the theme a tap would switch to.
- **+ Add is in the header**, on the other side from the page flip.
  A new item is typed in a small popup.
- **The tab row and the add row do not sit in the list area.** The
  list sits under the header.
- **A copy that runs on the phone without the Mac is a Release
  build.** Debug, from Xcode or from expo without Release, leaves
  the pages on the Mac, and the phone shows that it has no script
  URL. 4-Shopping put Release on the phone from Xcode: the scheme
  set to Release, then Run onto the real iPhone. The old Terminal
  line is npx expo run:ios --configuration Release --device. On
  Xcode 27 that line still looks for an app named Simulator, which
  Apple replaced with Device Hub.
- **Xcode 27 has Device Hub, not Simulator.** Tapping the phone
  picture in Device Hub is View Screen, not loading. Loading is
  Xcode Run, aimed at the real iPhone.
- **For Xcode 27, a Pods iOS version below 15.0 is an error.** The
  Podfile floor is 15.1.
- **The first time the app opens, it shows a short message.** Keep
  your permanent list in Inventory. Use Shopping when you go to the
  store. It is in the app, for a later load. (Patrick, 4-Shopping)

## What is open in front of it

Waiting for Apple to accept the review. The listing is not live
yet.
