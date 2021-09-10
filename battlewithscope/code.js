function Knight() {
    this.health = 4; // DO NOT MANUALLY CHANGE THIS FROM 4
  
    this.damage = -1;
    this.heal = () => {
      this.health += 2;
      alert(`You Healed!  Your health is now ${this.health}`);
    };
  
    // You must keep this function working.
    this.getHealth = () => {
      return this.health;
    };
    this.attack = () => {
      if (monster.name === "Pirate") {
        monster.serenade();
      }
      else if (monster.name === "Wizard") {
        monster.giveBomb(this.bomb);
      }
      else {
        monster.slash();
      }
    };
    this.slash = () => {
      monster.slash();
    };
    this.bomb = () => {
      monster.givebomb(this.bomb)
    }
  }
  
  /**
   * --------------------------------------------------------
   * DO NOT CHANGE ANYTHING BELOW THIS LINE
   * But read through it :)
   * --------------------------------------------------------
   */
  
  // You will have access to the knight instance
  let knight;
  
  // As well as the monster instance
  let monster;
  
  // Now Let's start the game!
  startTheGame();
  
  /**
   * ------- MONSTERS --------------------------------------
   * These are the monsters you must face!
   * Study them carefully!
   *
   * What functions can you access?  How can you defeat them?
   */
  
  function Gargoyle(name) {
    this.name = name || "Gargoyle";
    let health = 3;
    let damage = 1;
  
    this.slash = () => {
      health--;
      alert("You Slashed for 1 damage.");
    };
  
    this.attack = function () {
      if (knight && knight.health) {
        knight.health -= damage;
        alert(`The ${this.name} attacked you! -${damage} health!`);
      } else {
        alert(`The ${this.name} couldn't attack you...`);
      }
    };
  
    this.getHealth = () => {
      return health;
    };
  }
  
  function Wizard() {
    this.name = "Wizard";
    let health = 3;
    let damage = 2;
  
    this.slash = () => {
      alert("The Wizard Dodged!");
    };
  
    this.giveBomb = (bomb) => {
      if (bomb && typeof bomb === "function") {
        let damage = bomb();
        if (damage && typeof damage === "number") {
          health -= damage;
          alert(`Your bomb caused ${damage} damage!`);
          return;
        }
      }
      alert("Your bomb did nothing!");
    };
  
    this.attack = function () {
      if (knight && knight.health) {
        knight.health -= damage;
        alert(`The ${this.name} attacked you! -${damage} health!`);
      } else {
        alert(`The ${this.name} couldn't attack you...`);
      }
    };
  
    this.getHealth = () => {
      return health;
    };
  }
  
  function Pirate() {
    this.name = "Pirate";
    let health = 3;
    let damage = 10;
    let favoriteSong = "A pirate's life for me";
  
    this.slash = () => {
      alert("The Pirate Deflected!");
    };
  
    this.giveBomb = (bomb) => {
      if (bomb && typeof bomb === "function") {
        let damage = bomb();
        if (damage && typeof damage === "number") {
          knight.health -= damage;
          alert("The Pirate threw your bomb back!");
          return;
        }
      }
      alert("Your bomb did nothing!");
    };
  
    this.serenade = (song) => {
      if (typeof song === "string") {
        if (song.indexOf("plunder") > -1) {
          var canPlunder = true;
          if (song.indexOf("me hearties") > -1) {
            var gunpowderIsLit = true;
          }
        }
        if (song.indexOf("pirate's life") > -1) {
          var willExplode = true;
        }
  
        if (canPlunder && gunpowderIsLit && willExplode) {
          health -= 10;
          alert("The Pirate sang along so loudly he exploded! 10 damage!");
          return;
        }
      }
      alert("Your Song did nothing...");
    };
  
    this.attack = function () {
      if (knight && knight.health) {
        knight.health -= damage;
        alert(`The ${this.name} attacked you! -${damage} health!`);
      } else {
        alert(`The ${this.name} couldn't attack you...`);
      }
    };
  
    this.getHealth = () => {
      return health;
    };
  }
  
  function startTheGame() {
    /**
     * ------- Rendering Logic --------------------------------------
     */
  
    renderCharacter = function (id, name, image, health, knightObject) {
      let container = document.getElementById(id);
  
      // Remove any previous DOM, we will re-render it.
      container.innerHTML = "";
  
      // Make the avatar
      let img = document.createElement("img");
      img.src = image;
      img.style.width = "200px";
      img.style.height = "200px";
      container.appendChild(img);
  
      // Make the Name
      let h1 = document.createElement("h1");
      h1.textContent = name;
      container.appendChild(h1);
  
      // Show the Health
      let healthBox = document.createElement("h3");
      healthBox.innerText = "Health: " + health;
      container.appendChild(healthBox);
  
      // If this is the knight, then render the buttons.
      if (knightObject) {
        let buttonContainer = document.createElement("div");
        buttonContainer.id = "buttons";
  
        // Render every method of the Knight as a button
        for (let property of Object.keys(knightObject)) {
          if (
            knightObject.hasOwnProperty(property) &&
            typeof knightObject[property] === "function" &&
            property !== "render" &&
            property !== "getHealth"
          ) {
            let button = document.createElement("button");
            button.innerText = property;
            button.addEventListener("click", function () {
              try {
                let fn = knightObject[property];
                fn();
              } catch (error) {
                alert(`You couldn't do ${property}!`);
              }
            });
            button.addEventListener("click", afterAction);
            buttonContainer.appendChild(button);
          }
        }
        container.appendChild(buttonContainer);
      }
    };
    // Adding these render methods so that they don't clutter the classes above.
    Knight.prototype.render = () => {
      renderCharacter(
        "knight",
        "The Golden Knight",
        "images/goldenKnight.png",
        knight.getHealth(),
        knight
      );
    };
  
    Gargoyle.prototype.render = function () {
      renderCharacter(
        "monster",
        this.name,
        "images/monster.png",
        this.getHealth()
      );
    };
  
    Wizard.prototype.render = function () {
      renderCharacter(
        "monster",
        this.name,
        "images/monster2.png",
        this.getHealth()
      );
    };
  
    Pirate.prototype.render = function () {
      renderCharacter(
        "monster",
        this.name,
        "images/monster3.png",
        this.getHealth()
      );
    };
  
    /**
     * ------- Game Logic --------------------------------------
     */
  
    // after every player action, update the game.
    function afterAction() {
      // Re-render
      knight.render();
      monster.render();
  
      // If the knight is dead, then end the game...
      if (knight.getHealth() < 1) {
        alert("You Died!");
        location.reload();
      }
  
      // If the monster is alive, then it should attack
      if (monster.getHealth() > 0) {
        monster.attack();
        knight.render();
        monster.render();
  
        if (knight.getHealth() < 1) {
          alert("You Died!");
          location.reload();
        }
      } else {
        // Otherwise it is dead.
        let container = document.getElementById("monster");
        container.innerHTML = "";
        alert("You killed the " + monster.name + "!");
  
        // If there is another monster, then render it.
        monsterIndex++;
        if (monsterIndex < monsters.length) {
          monster = monsters[monsterIndex];
          monster.render();
          alert("A New Monster Appeared!");
        } else {
          // Otherwise you win!
          alert("You Won the Game!");
        }
      }
    }
  
    // Game Logic ------------------------------------------
  
    knight = new Knight();
    knight.render();
  
    let monsters = [
      new Gargoyle(),
      new Gargoyle("Second Gargoyle"),
      new Wizard(),
      new Pirate(),
    ];
    let monsterIndex = 0;
    monster = monsters[monsterIndex];
    monster.render();
  }