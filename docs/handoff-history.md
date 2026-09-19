# Session history — Shopping List (iPhone)

Newest sittings at the top. Open this when something finished needs
tracing. The live desk is `handoff.md`.

## 4-Shopping (2026-09-19)

Got the 6.5-inch screenshots into Connect, and Connect took Add for
Review. Apple has the listing for review. It is not live on the
store yet.

Xcode 27 had replaced Simulator with Device Hub. The Pods iOS
version was raised to 15.1 so Xcode 27 would build. Debug from
Xcode showed that no script URL was provided. A Release run from
Xcode put Shopping List on the phone. Patrick captured Shopping
and Inventory there and put those pictures in the 6.5-inch slot.
Patrick named a first-time opening message for a later build: keep
the permanent list in Inventory, and use Shopping when you go to
the store. That message is in the app.

## 3-Shopping (2026-09-17)

Got Shopping List into its own GitHub repository, Shopping-List,
and sent two production builds to Apple, the second with the cart
picture. Connect would not take the listing name Shopping List.
It accepted Shopping, with the subtitle Shopping List on your
phone. Privacy and support pages were put on elyfont.com. Omaha
Test Team was copied onto this app. The sitting ended without App
Store screenshots. The app was no longer on the phone. Expo could
not find Simulator, because Xcode 27 had replaced it with Device
Hub.

## 2-Shopping (2026-09-16)

Put Shopping List on the phone so it runs without the Mac.

1-Shopping had built the app and left first run open. That sitting
ran thin and told Patrick to use npx expo run:ios --device. The Mac
did see the phone. The build succeeded and the app was installed.
The iPhone then showed that no script URL was provided, because that
command is a development copy: the pages stay on the Mac.

1-Shopping's work was committed under the Projects folder (Patrick,
this sitting).

The command that put a copy on the phone that runs on its own is
npx expo run:ios --configuration Release --device. Until that
command finished, the Mac's build folder held only a Debug copy,
with no pages inside it. After Release, the app was on the iPhone
and ran without the Mac.

The icon is still a teal square. Backup still waits. Expo's cloud
build is not set up for this app; it was not needed for this
sitting.

## 1-Shopping (2026-09-16)

Built the app. The folder is `Projects/shopping`. The page is
`app/shopping.tsx`, in Memory's housing, with the new header: page
flip on the left, Mystery's theme button beside + Add on the right,
and a small popup to add an item. The stray copy remains as the
source it was taken from. First run and the icon picture were left
open. This sitting ran thin and did not write its own history
entry.
