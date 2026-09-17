# Session hand-off — Shopping List (iPhone)

This file is for the next sitting. It says what was done and what
still needs to be done. It is not the whole history. History lives
in `handoff-history.md` and is opened when something needs tracing.

A decision is written the moment it is made, in that turn.

## Where things stand

**3-Shopping** is to get Shopping List into its own repository and
onto the App Store. Patrick created the GitHub repository
Shopping-List (Patrick, 3-Shopping). **2-Shopping** put the app on
the phone and is committed (Patrick, 3-Shopping). A Release build is on Patrick
Murphy's iPhone and runs without the Mac. The icon is still a teal
square.

## Standing rulings

- **The name is Shopping List. The badge under the icon is Shopping.**
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
  build.** In Terminal, in the shopping folder, with the phone
  plugged in, the command is npx expo run:ios --configuration
  Release --device. The same command without Release leaves the
  pages on the Mac, and the phone shows that it has no script URL.

## What is open in front of it

Own repository. App Store. The icon is a teal square until there is
a Shopping picture.
