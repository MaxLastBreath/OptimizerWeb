### Why is development so slow?
- Due to the complexity of UltraCam and me being the sole development atm, it takes a very long time to manage multiple versions projects and more... Currently BOTW UltraCam is also being developed, It's on about the level of 2.0 right now, with bunch of bugs that need to be fixed, available for EA on Kofi/Patreon.

### Why is UltraCam EA on Beta 6 but we're still on 2.5?
- UltraCam EA is UltraCam Calamity (3.0) Beta 6 and the public version is UltraCam Beyond (2.0 - 2.5), They are basically completely different things internally.

### With this version the aim is to add more support for community content and ease of community made content. Also addressing long standing bugs.
### Most of these features have been available on my [Kofi](https://ko-fi.com/maxlastbreath)/[Patreon](https://www.patreon.com/MaxLastBreath] for a while, those versions are rather unstable but pack on a lot, lots more features, but if you'd like to you can always support me on there.
- There's also now an experimental version for MacOS available for TOTK Optimizer, it has been for a month.

### Internal Changes
- [TOTK Console, Open Source UltraCam API](https://github.com/MaxLastBreath/TOTK-UltraCam-Console)
   - This console is Server based API that allows you to interact with Ultracam remotely, even on your switch, it's built in a way that is friendly for other modders to change and create their own Program or GUI to interact with Ultracam in real time. The console allows for the spawning of mobs, saving and loading sequences and many other things.
- Climbing on ladders at FPS higher than 60 has been addressed.
- Triple Buffer is fully fixed now, it'll be forced on all the time.
- Added 2 new Benchmarks, Depths and Zora Domain.
- Added Actor Spawner. (Also spawns are now based on camera POS)
- Added support for UltraCam Console & API.
- Added a way to load/save sequences.
- Added a toggle for passive HP regen.
- Added a Benchmark Hotkey ZL + ZR + Left Stick Down.
- Added game-pause. Pauses the world and AI. (Hold ZR + Minus) or P on keyboard
- Removed forced Aspect Ratios
- Added the following TOTK Console Commands:
   - spawn, allowing the spawning of multiple enemies front of camera/link.
   - tp, allows for the teleportation to specific coordinates.
   - cords, prints the location of link.
   - settime, allows you to set a specific time.
   - gettime, gets the current in-game time.
   - changeweather, forces a random weather change.
   - pause, pauses the game's world and AI.
   - godmode, makes link invicible.
   - kill, kills Link.
   - heal, heals Link.
   - fps, allows you to set custom FPS target in real time.
   - fov, allows you to change FOV in real time.
   - gamespeed, allows you to change the game speed, 30.0f is default.
   - shadow, let's you set shadow resolution 1 - 8
   - resolution, let's you change resolution in real time.
   - freecam, toggles freecam.
   - hideui, hides UI.
   - savesequence, saves sequence data in json file.
   - loadsequence, loads sequence data.
   - benchmark, plays benchmark.