//your JS code here. If required.
function updateWindowSize() {
        const sizeInfoDiv = document.getElementById("sizeInfo");
        const width = window.innerWidth;
        const height = window.innerHeight;

        sizeInfoDiv.innerHTML = `<h1>Width: ${width} and Height: ${height}</h1>`;
      }

      // Initial call to display the size when the page is first loaded
      updateWindowSize();

      // Update the size when the window is resized
      window.addEventListener("resize", updateWindowSize);

