   function changeMode(size, weight, transform, background, color) {
      let body = document.getElementsByTagName("body")[0];
      body.style.fontSize = size;
      body.style.fontWeight = weight;
      body.style.textTransform = transform;
      body.style.backgroundColor = background;
      body.style.color = color;
    }

    function main() {
      let spooky = changeMode(12, "bold", "uppercase", "pink", "green");
      let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
      let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

      let p = document.createElement("p");
      let content = document.createTextNode("Welcome Holberton!");
      p.appendChild(content);
      document.body.appendChild(p);

      let btns = {
        spooky: {
          name: "Spooky",
          mode: () => changeMode(12, "bold", "uppercase", "pink", "green")
        },
        darkMode: {
          name: "Dark Mode",
          mode: () => changeMode(12, "bold", "capitalize", "black", "white")
        },
        screamMode: {
          name: "Scream mode",
          mode: () => changeMode(12, "normal", "lowercase", "white", "black")
        }
      };

      function createButton(btnObj) {
        let btn = document.createElement("button");
        btn.textContent = btnObj.name;
        btn.onclick = btnObj.mode;
        return btn;
      }

      for (const btnObj in btns) {
        document.body.appendChild(createButton(btns[btnObj]));
      }
    }

    main();
