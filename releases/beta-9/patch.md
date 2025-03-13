# Development Blog

- ## Health Update:

    - Hey! Thank you for your continuous Support <3! 

    - As some of you know, I've went through 2 surgeries done to my broken ankle so far, the last surgery was early January after Beta 8.1 which forced me to stay in the Hospital for a few days. Once I went out of the Hospital I had a week of recovery and then went straight to Physiotherapy. I'm happy to report I'm doing much better and recovering, finally being able to walk! Unfortunately, this didn't come without a cost. I've been extremely exhausted the past 2 weeks walking with my calf being completely atrophied, very bad muscle pain, and lots of PT (Had a cast for 65 days, my calf is completely gone D:). 

    - Due to these circumstances, we are having a little bit of a late update and overall a smaller update than what I'm happy with... Fortunately, I'm feeling a lot better now after my Physiotherapy ended last week, and I've gotten as much work to the Optimizer and UltraCam as I could in the free time I had available to me.

- ## Overall Thoughts about the Update:


    - Some of you may not know this, but I helped CM develop a health regen mod for monsters. This is available as a standalone download for Challenge Mode. It'll be reimplemented in UltraCam in the future and most likely Open-Sourced too. I'm currently the only person with the Source Code. Over the years, I've contributed a lot to Challenge Mode (Master Mode) as a team member, and it is finally released. I've worked on the design of many of the horns and monsters.

- ## Some Of The Designs/Models I contributed to Challenge Mode! (There's a lot more)

    # <p align=center> ![MS-SS](https://c10.patreonusercontent.com/4/patreon-media/p/post/121992932/7173aaf676ca4bcc99bb164cedd5eb7e/eyJ3Ijo4MjB9/1.png?token-time=1743120000&token-hash=QSmRKdTBSSBBDOq0qwGEiD2hIw-eu3UcAXCVP65Iysc%3D) </p>

    - EA 9.0 focuses heavily on fixing bugs and obviously the promised Link's Awakening UltraCam, albeit a bit barebones as of right now. The UC for Link's Awakening was heavily rushed due to time constraints and just overall feeling very exhausted lately.

    - Tears of the Kingdom is moving forward well, and I believe Beta 9 is by far the most stable version we have had, with a decent amount of crashes and bugs fixed. There are still a few physics bugs that recently got reported on Discord at 120 FPS. Unfortunately, my CPU isn't fast enough to hit 120 FPS consistently enough, which makes it very difficult to fix them. But I'll definitely be looking into them whenever possible.

- ### NX Optimizer Public Release

    - As some of you may know, NX Optimizer 3.0 is soon going to be released for free, featuring both UltraCams for EOW and BOTW. TOTK will continue to stay in EA as it is still very much unfinished. Link's Awakening needs a few updates still, as it is very much barebones at the moment, albeit I don't know if this is high priority right now.

    - For the NX Optimizer public release, I'll need quite a bit of time to prepare. I'm working on a website that I really want to finish before the official release. That should help with sorting information and a lot more. I also want to make a few videos for the official release. This time it's a pretty big one! Unfortunately, all of this is very time-consuming, so I'm not sure what I can get done this month, but I really want to release the NX Optimizer this month.

    - Very Early Concept for the Website Page
    
    # <p align=center> ![web-SS](https://c10.patreonusercontent.com/4/patreon-media/p/post/121992932/ddef9d3ce0034f3c8aa4e3d7c3b17e09/eyJ3Ijo4MjB9/1.png?token-time=1743120000&token-hash=Atyya32um3uAXpFT9iQi8aB-aQiLsmquQF4yMmpVt44%3D) </p>

- ## Tears of The Kingdom

    - Oh boy, where do I start? I have so many things I want to do in TOTK, but they are all super complex internally. I want to add a collision visualizer and freecam keyframe visualizer as well. I also want to rework the entire actor system to give more control over actors and actor spawners. I really want to rework the entire actor spawner in general to be honest. I also want to add TouchScreen support to the UI. All of this is very time-consuming and very daunting to start work on, as it's looking into hundreds of hours of work again D:. Oh yeah, the entire config system will move to the SDCard soon, as the UI can save each setting directly from the UC Menu. This is very much a priority right now.

# NX Optimizer: 

- ## Game Updates:
    - ## Link's Awakening UltraCam Port V1
        - Added FreeCam
        - Added Teleportation
        - Added FPS Setting (DISABLED)

- ## UI:
    - Resolved inconsistent Scaling issues specifically with the "Support" button.
    - Added Support for further UI customization in the future.
    - Now Defaults to Beta Versions.

- ## Patch Manager:
    - Added Support for SDCard Config installation:
    - Allows for new mods config file to be installed in the SD card instead of romfs.
    - This is a compatibility feature, soon TOTK's config file will move to the SDCard, similar to Link's Awakening.

- ## Github:
    - Updated Github Actions and Artifacts Retention.
    - Added Linux Arm64 Builds.

### UltraCam For Link's Awakening (NEW)
# <p align=center> ![LA-SS](https://c10.patreonusercontent.com/4/patreon-media/p/post/121992932/38e4fe6c78314cb2ac8764dbb9d03934/eyJ3Ijo4MjB9/1.png?token-time=1743120000&token-hash=LseiGsBc3gH3x02S9_6ZpALU45EeJ9C2C3iFnVGubEc%3D) </p>
# <p align=center> ![LA-SS2](https://c10.patreonusercontent.com/4/patreon-media/p/post/121992932/55b30046dac64930a225eca967a96505/eyJ3Ijo4MjB9/1.png?token-time=1743120000&token-hash=jTmZDN-YnkdQaaPTjfbAeLDagQhxfbjNEq8cmSgHWPA%3D) </p>

- Added UltraCam's FreeCam
    - **Left Trigger (HOLD), Pad Down (PRESS)** - Unlocks Freecam. - (U)
    - **L (PRESS) and R (PRESS)** - Move UP/Down. - (CNTRL) (SPACE)
    - **Pad Left (PRESS), Pad Right (PRESS)** - Camera Speed. - (1) (2)
    - **Pad Down (PRESS)(TOGGLE)** - Allows control over link. - (L)
    - **ZR (HOLD) or ZR (HOLD)** - Acceleration/De-Acceleration for Movement and Time. - (SHIFT) (ALT)
    - **Y (PRESS) or A (PRESS)** - Controls Tilt. - (3) (4)
- **Added The Ability To Teleport Link to Camera**
  - **ZR (HOLD) + Down (PRESS)** - Teleport Link. (O)
- **Added Sequencer**
  - **X (PRESS)** - Create Keyframe. - (6)
  - **B (PRESS)** - Delete Keyframe. - (7)
  - **Right Stick (PRESS)** - Play Sequence. - (8)
  - **Delete Sequence.** - (0)
  - **L (PRESS)(SEQUENCE)** - Pause. - (SPACE)
  - **L (PRESS)(SEQUENCE)** - Reverse. - (BACKSPACE)
  - **Pad Left (PRESS)** - Slow Down. - (1)
  - **Pad Right (PRESS)** - Speed Up. - (2)
  - **ZL (HOLD) or ZR (HOLD)** - Accelerate/De-accelerate. - (SHIFT) (ALT)
- Added Support for FPS (Currently Unfinished/Disabled)
- Added Config Support:
   - Link's Awakening uses the new SDCard configuration. Moving forward, every UltraCam will use the SDCard configuration, including TOTK and BOTW as they get more updates.
   - This allows for the config to be edited by the game, unlike the romfs implementation.
- Added Benchmark (Currently Disabled)

## Tears Of The Kingdom

- ## Fixed Crashes:
    - Fixed a crash when using the UltraCam FPS limiter to set FPS to above 60 or below 30.
    - This should fix crashes that happen when loading above those FPS.
    - Fixed crashes that happen when opening Menus at those FPS.
    - Fixed a crash caused by the FPS Overlay.

- ## Fixed Softlock:
    - Fixed a softlock that can happen when toggling between Menus and FreeCam/UC Menu.

- ## Reworked Camera Speed for UltraHand (This Fixes the Following):
    - Fixed Bow Speed Inconsistencies when using unique controllers.
    - Adjusted UltraHand Speed to match 30 FPS with the new Fix.
    - Improved Purah Pad zoom speed to be more consistent.
    - Fixed Shield Surf Camera Speed being too slow at FPS above 30 FPS.
    - Fixed Camera Speed settings not working at all.
    - Now also changes Bow Speed.
    - Now also changes Shield Surf Speed.
    - Now also changes UltraHand Speed.
    - Now also changes Purah Pad Speed.

- ## Added a NEW DPS Counter:
    - Tracks the damage dealt to enemies within the last 3 seconds, then shows an average of the DMG dealt over a period of time.
    - More options to be added.
    - This setting is currently located inside of Game DPS Counter.

- ## Cheats:
    - Increase or Decrease Damage Taken 0.1-100.0x
    - Increase or Decrease Damage Deal 0.1-100.0x
    - Overhauled health regeneration Cheat for code readability and consistency.
  
- ## Major Systems Overhaul.
    - ### Controller System Overhaul:
        - The Controller System has been overhauled to use 2 controllers separately from each other:
        - One Controller that is Updated in the Camera Loop
        - One Controller that is Updated inside of the UI loop.
        - This new system allows for a more bug-free experience. This also makes the controllers more consistent between FreeCam/UC UI.

    - ### System Pause Tracker:
        - This system is used to detect when a Menu is Opened. The overhaul aims to fix inconsistencies with Mods like TOTK Randomizer and overall turn it into a more consistent system.
        - This should make the menu FPS Options/Tweaks more consistent overall with different changes or mods.
        - Resolved crashes and inconsistent behavior when used with TOTK Randomizer.
        - Currently, Pause "AI" is broken when used with TOTK Randomizer.
        - In order to be able to pause AI again with the TOTK Randomizer, teleport once through the map menu.

    - ### Cheats Loading and Saving Overhauled:
        - Mostly for code readability and consistent behavior.
