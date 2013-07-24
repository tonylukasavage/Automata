Automata
========

* **Version:** 0.1.0

A highly impractical implementation of [Conway's Game of Life](http://en.wikipedia.org/wiki/Conway's_Game_of_Life) using [Appcelerator Titanium](http://www.appcelerator.com/platform/titanium-platform/). Titanium is in no way suited to be a particle engine or drawing canvas, but I thought it might be fun to simulate the game using only Titanium Views and math. There's obvious limitations in terms of performance, but it runs surprisingly well once the live cells start to dwindle down.

Running the App
---------------

Install [Titanium](https://my.appcelerator.com/auth/signup), if you haven't already. Installing Studio should grab the CLI for you by default, but if it doesn't, just do this:

`[sudo] npm install -g titanium`

And then you can run the app from the CLI:

`ti build -p ios`

or you can import it into [Titanium Studio](http://www.appcelerator.com/platform/titanium-studio/) if you so choose.

Tested on
---------

* Titanium SDK & CLI 3.1.1
* iOS 6.1 (iPhone and iPad simulators)

Building the Source
-------------------

1. `[sudo] npm install -g grunt-cli` to install [grunt](http://gruntjs.com/getting-started)
2. `npm install` to install Automata's grunt depedencies
3. `grunt` will build from "src/app.js" to "Resources/app.js"

Check the [Gruntfile.js](https://github.com/tonylukasavage/Automata/blob/master/Gruntfile.js) for full details.

Known Issues
------------

* Won't get past the splash screen on Android emulator 2.3.3 HVGA or my Galaxy Nexus 4.2.2. I'm assuming it's choking on the makeshift "render loop", but I need to investigate more to determine exactly why.
* Totally untested on Blackberry
* The performance bottleneck is setting the proxy's `visible` property in the render loop. That single line of code where Titanium needs to cross the native bridge accounts for over 99% of the time needed to execute the render/generation loops. I may see if there's an optimized way to do it, but I've already reduced the number of proxy property changes to the bare minimum. It's likely native module or SDK hack material.

TODO
----

* Android and Blackberry support. No Mobileweb or Tizen support, as that would be better done on a Canvas or WebGL surface anyway.
* Stronger performance statistics
* Options to support [toroidal arrays](http://en.wikipedia.org/wiki/Conway's_Game_of_Life#Algorithms)
