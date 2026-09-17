# Session history — Shopping List (iPhone)

Newest sittings at the top. Open this when something finished needs
tracing. The live desk is `handoff.md`.

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
