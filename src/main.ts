import { Player } from "./GameObjects/player";
import "./Styles/style.css";

(() => {
  var canvas = <HTMLCanvasElement>document.querySelector("#canvas");
  const ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
  let player = new Player(ctx, "rgb(255,202,40)", 0, 0, 25, 25);

  function game() {
    player.draw();

    requestAnimationFrame(game);
  }

  const up = <HTMLButtonElement>document.querySelector("#control-up");
  const down = <HTMLButtonElement>document.querySelector("#control-down");
  const left = <HTMLButtonElement>document.querySelector("#control-left");
  const right = <HTMLButtonElement>document.querySelector("#control-right");

  up.onclick = () => {
    player.y -= 25;
    player.color = "rgb(179,157,219)";
  };
  down.onclick = () => {
    player.y += 25;
    player.color = "rgb(239,83,80)";
  };
  left.onclick = () => {
    player.x -= 25;
    player.color = "rgb(255,202,40)";
  };
  right.onclick = () => {
    player.x += 25;
    player.color = "rgb(0,230,118)";
  };

  window.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") {
      player.y -= 25;
      player.color = "rgb(179,157,219)";
    }
    if (e.key === "ArrowDown") {
      player.y += 25;
      player.color = "rgb(239,83,80)";
    }
    if (e.key === "ArrowRight") {
      player.x += 25;
      player.color = "rgb(0,230,118)";
    }
    if (e.key === "ArrowLeft") {
      player.x -= 25;
      player.color = "rgb(255,202,40)";
    }
  });

  game();
})();
