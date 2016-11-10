This is a ThreeJS project which utilizes the PhysiJS library to simulate a physics engine on a falling box

![Screenshot of falling box](http://i.imgur.com/AztpCyk.png)

`cd` to project root

run a simple HTTP server to host the project with `python -m SimpleHTTPServer 8080`

visit `localhost:8080` from your browser

---

Expected outcome: a box will drop on the ground and it will produce an alert box saying **"Box just hit the ground"**

What's happening: alert box is not being created. Relevant javascript console logs are also not being produced upon collision.

---

You can inspect the `physijsBox.addEventListener()` portion in the `scripts/app.js` file in the source code.

Relevant PhysiJS documentation:
* https://github.com/chandlerprall/Physijs/wiki/Collisions
* https://github.com/chandlerprall/Physijs/issues/177

  [1]: https://github.com/syedrakib/threeJS_collision_problem/blob/master/scripts/app.js
