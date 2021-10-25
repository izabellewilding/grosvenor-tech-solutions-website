import { useEffect } from "react";
import styled from "@emotion/styled";

const BinaryMatrixCanvas = styled.canvas`
  position: absolute;
  z-index: -10;
`;
export const BinaryMatrixAnimation = ({ isDarkTheme }) => {
  console.warn(isDarkTheme);

  useEffect(() => {
    var c = document.getElementById("c");
    var ctx = c.getContext("2d");

    //making the canvas full screen
    c.height = window.innerHeight;
    c.width = window.innerWidth;

    //chinese characters - taken from the unicode charset
    var characters = "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝ";
    //converting the string into an array of single characters
    characters = characters.split("");

    var font_size = 18;
    var columns = c.width / font_size; //number of columns for the rain
    //an array of drops - one per column
    var drops = [];
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for (var x = 0; x < columns; x++) drops[x] = 1;

    //drawing the characters
    function draw() {
      //BG for the canvas
      //translucent BG to show trail
      ctx.fillStyle = isDarkTheme ? "#3a3758" : "#ffffff";
      ctx.fillRect(0, 0, c.width, c.height);

      ctx.fillStyle = isDarkTheme ? "#ffffff" : "#6562cc";
      ctx.font = font_size + "px arial";
      //looping over drops
      for (var i = 0; i < drops.length; i++) {
        //a random characters character to print
        var text = characters[Math.floor(Math.random() * characters.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * font_size > c.height && Math.random() > 0.975)
          drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
      }
    }
    // setInterval(draw, 40);
  }, [isDarkTheme]);

  return <BinaryMatrixCanvas id="c"></BinaryMatrixCanvas>;
};
