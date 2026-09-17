# Session rules — read before anything else

1. How Claude conducts itself lives in `Projects/CLAUDE.md`, at
   the root of the parent folder, which arrives on its own at
   every session start. None of it is repeated here — with one
   exception, which Patrick asked to stand in every rules file:

   > **Instead of spending my time and money on proving yourself
   > right, work much harder to understand what I tell you**
   > (Patrick, SA-17).

   This file arrives on its own too, whenever this project's
   folder is connected.

2. This project's opening read is `docs/handoff.md`, and only
   that. `docs/pending.txt` is Patrick's plain-language list
   and is brought up to date at every update. It is how he
   tracks the work, so it is never left for a later pass.
   `docs/handoff-history.md` is opened only when something
   finished needs tracing.

   `docs/index.md` says what every file in `docs` and in
   `docs-ref` holds, and whether it is live or history. `docs`
   is the live desk. History lives in `docs-ref`. It is not
   part of the opening read. A stale index is worse than none,
   so a file added, retired or renamed changes its line at the
   same refresh.

3. At a session start, ask Patrick whether the previous
   session's work was committed — he prefers being asked. Never
   pre-assert a commit in his voice. When he says he has
   committed, mark it committed at once; do not hedge or ask
   him to verify.

4. **Keeping the record.** These are conditions, not ceremonies.
   A failing condition is put in front of Patrick, who decides.
   It is not an instruction to act.

   - **A decision is written the moment it is made, in that turn.**
     Common work that still governs goes into `docs/handoff.md`
     standing rulings. Design of the app goes into
     `docs/designed-implementation.md` when that file exists. A
     specific task that is already done does not stay in the live
     handoff.
   - **`handoff.md` holds live work, open questions, and common
     work that still governs, and stays under 400 lines.**
   - **Nothing is deleted from `handoff.md` until it exists in
     `docs/handoff-history.md` or in `docs/designed-implementation.md`,
     as the case requires.**
   - **Every session has an entry in `handoff-history.md`**, written
     at its close, newest on top.
   - **Write the condition, not the ceremony.**

# Working notes for this project

- **The name is "Shopping List"; the badge under the icon is
  "Shopping".** This project's chain is written "1-Shopping,
  2-Shopping, …". No old reference is ever edited.
- **Memory is the model for housing.** Folder:
  `Projects/elderlyassistant`. Its page frame, themes, landscape,
  and Expo layout are opened when this app needs a pattern.
- **The source page is `Projects/stray apps/shopping.tsx`.** That
  is the Shopping List as it was in Memory.
- **TypeScript checks (npx tsc) are fine here.** Git never is —
  that rule lives in `Projects/CLAUDE.md`.
