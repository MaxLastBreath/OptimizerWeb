<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=6c7086&height=120&section=header"/>

# Development Blog
- Hey! Thank you for your continuous Support <3.
- Sorry the update is a bit later than planned, a lot happened this month between building the NX Optimizer website and releasing BOTW and EOW for free, both the NX Optimizer and EOW and BOTW received updates since the last beta.
- This is a massive update to both TOTK and BOTW, TOTK has a ton of stuff changed in the backend and more will be changed after beta 10 coming in beta 11, BOTW got the in-game menu from TOTK ported over, while it is an older version of the in-game menu since i started basically rewriting everything on the back-end of TOTK, for the moment it's still lacking a certain amount of features but more will come once i update it for beta 11.
- TOTK Received a lot of love this update, the entire freecam has been refractored, most of the menu has been refractored, graphics stuff has been refractored, resolution has been changed, new config structure and lots lots more stuff. Some bugs and crashes have been fixed too.
- BOTW primarily received the first itteration of the UC Menu, more will come in a later update.

# NX Optimizer: 
- ### [ALL NX Optimizer Changes](http://127.0.0.1:3000/releases/3.0/)
- NX Optimizer now can open nxop packages, which are custom packages made for NX Optimizer to load beta versions, moving forward you can install the beta mods directly to the public NX Optimizer version!
- Proper Benchmark Support for V2 Benchmarks (betas)
- The ability to choose which Legacy Emulator should be used
- Dynamic Benchmark Buttons/Behavior
- Added Benchmark Counter
- Added Benchmark Cycle Buttons
- Ryubing per game settings implementation
- Lots more changes, [read the changelog!](http://127.0.0.1:3000/releases/3.0/)

# NX Optimizer/UltraCam Website
- [BOTW Info, controls, free version & More!](https://www.nxoptimizer.com/games/breath-of-the-wild/)
- [TOTK Info, controls, free version & More!](https://www.nxoptimizer.com/games/tears-of-the-kingdom/)

# Tears Of The Kingdom
### Backend changes
- Renamed many classes, namespaces and more for consistencies.
- Created new wrappers for json & ini config files.
- Renamed TOTKGui namespace to UCGui for future title ports.
- Moved version Info, Docked/Handheld detectors into it's own UC helper class
- Moved Menu state into UC Info helper class
- Moved Resolution, Shadow Resolution, LODS into their own UC Helper class
    - Further more, Resolutions and Shadow resolutions are now calculated more accurately
    - High resolutions now can't be loaded if certain ram requirements are not met
    - Ram is now automatically allocated to graphics when 6gb, 8gb or 12gb heaps are present
    - UCHeap can now tell the amount of RAM the game has available to it on boot.
    - Loading Higher shadows and resolution is now possible given adequate amount of ram is available without restarting the Menus
    - If you load a resolution higher than the maximum possible resolution, UltraCam will warn you in the titlescreen.
- Removed Benchmark prints from the beta as it now uses the json file structure.
- Removed the old config file loader
- Removed support for configs from romfs/folder as now configs are loaded from the sdcard
    - sd:/UltraCam/TOTK/Config/
- Moved Config values into their own structures whenever possible.
- Separated config namespace values into a separate file(s). 
- Added a new Config Class wrapper
    - This class wrapper supports saving and loading configs with ease.
- Added custom LOD Support
- Added Anisotrophic filtering option
- Added shadow resolution to the overlay
- Added Display Mode to the overlay Docked/Handheld
- Added null terminators to the custom UltraCam Filesystem library
- Added popup dialogue option for Apply
- Added warnings about settings needing full reboot
- Created a new JSON Wrapper for CJSON
- Made the Dynamic FPS Buffer more efficient
- Certain config settings have been moved around in different sections.

### FreeCam (UltraCam)
- The entire MAIN freecam is now a proper interface with controller, sequencer, freecam config and lots more in a single class.
- Code has been massively cleaned up for future projects.
- Smoothened out camera movement (no more jitter)
- Smoothened out Sequencer
- Now uses a second camera controller for half interpolation between each frame.
    - This helps smooth out the camera movement
- Added the base camera speed multipliers to the Camera Class
- Added support for potential future keybind customizations
- Updated Camera internal logic
- Updated the logic for freecam speed multiplier (Dpad left and Dpad right) keys
- Updated the Rotation and Camera Speed Values
    - Base Rotation is now 90
    - Base Speed is now 15
- Fixed Benchmark not updating due to duplicate frames
- Fixed the sequencer not updating due to duplicate frames
- Fixed incorrect Rotation and Camera Speed due to multiple frames a second update rate
- Fixed Camera Update rate (it was running 3x a frame)
- Fixed fadeout speed at the very end of each keyframe causing a slight softlock

### New Features
<iframe width="100%" height="800px" src="https://www.youtube.com/embed/FcEYNASvFY4?autoplay=1&mute=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

- UltraCam Menu now supports Touch Screen on Switch and Android ETC! :)
- Idle Animation Rework
    - Now can load over 1750 different animations for link
    - Now can load all the skeletal animations from json files (this saves on memory)
        - Ideally the animations should be loaded from within the internal game library, this is a workaround for now
    - Requires selecting the Animation Data inside of the Data dropdown menu for now
- UltraCam Menu now fully saves every single notable setting inside of the UltraCam config file in sd:/UltraCam/TOTK/Config/
- Added the following settings to the menu :
    - Quality Improvements
    - Disable FXAA
    - Disable lensflare (Currently does nothing bugged)
    - Disable DOF
    - Force Docked Resolution
    - Anisotrophic Filtering
    - Level of Detail settings
    - Use Dynamic FPS 
        - if turned off game won't use dynamic FPS anymore
    - Dynamic FPS buffer
        - This setting controls the amount of frames used for delta time, default is 8
        - The lower the faster delta time updates, the higher the more smooth delta time is
        - UltraCam has always used buffer of 8, feel free to adjust and see how it feels
    - Menu FPS
    - Movie FPS
- Some of the settings require a restart to work
- The menu now automatically saves itself when it's closed

### Adjustments
- Renamed effects to filters
- Added Display mode besides Game Version
- Moved the Titlescreen watermark to the left rather than the middle of the screen
- Added Game Info under the titlescreen watermark
- Added error messages under titlescreen watermark

### Bug Fixes
- Fixed UltraCam controller being read more than once a frame.
- Fixed a crash caused by cJSON library not finding null terminators.
- Fixed some values not being fully initialized from within the effects(filters), menus. (Fixes a crash when closing the menus).
- Fixed a bug with the UltraCam FS library not allocating adequate amount of ram when saving/loading files.
- Fixed UC Gui causing softlocks in Menus
- Fixed UC Gui not opening in Menus
- Fixed inconsistent Camera Updates due to Camera Controllera
- Fixed stuttery Camera from camera controller
- Fixed Fadeout speed stopping a sequence abruptly in FreeCamera.
- Adjusted the way controller is read

### Planned Updates
- Actor spawner rework
- Randomizer rework
- Shader compiler
- 3D rendering
- Animation Favorite(s)
- Further Improvements to Actor structures
- Further Improvemetns to the menus
- Custom Aspect Ratios

### Known issues
- Currently loading Resolutions from UltraCam Menu higher than the first loaded resolution stretch the screen
- Some physics are broken at 100 FPS or above
- Lynels behave weirdly at above 60 FPS (for me to fix this i need to get a stronger CPU)..

## Breath Of The Wild

<iframe width="100%" height="800px" src="https://www.youtube.com/embed/GSYr0CHeyHg?autoplay=1&mute=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Backend Changes
- Removed Goron benchmark
- Added pause game Feature
- Now uses a separate controller for UltraCam and Menu
- Added sequencer functions to load/save sequences
- Added the ability to load TOTK Sequences to BOTW and vice versa
- Updated the backend system for Dynamic FPS for BOTW to use the same backend as TOTK
    - Smoothing and other stuff should feel better now :)

### BOTW in-game Menu Version 1 Features
- Added Graphics Menu
    - Resolution (Does nothing currently)
    - FPS setting
- Added FreeCam Menu
    - Exact same as TOTK
    - Sequencer/keyframe Manager
- Added Game Menu
- FPS Overlay
- Frametime Overlay
- DeltaTime Overlay
- Support for Benchmarks V2 (same as TOTK)
    - Benchmark loops
    - Benchmark stress
    - Benchmark FULL
    - Benchmark FPS Overlay data
    - Benchmark Json Dump

### Planned Features
- Full Menu Port
- Actor spawner, if there's interest please voice it! :)
- Cheats Menu & More.

### Bug Fixes
- Fixed Teleportation not working correctly in Benchmarks

### Known issues
- Thunderblight Ganon Speed
- Some gears don't move in shrines at high FPS.
- Menus are a bit fast.