//your JS code here. If required.
function updateSizeInfo() {
            const width = window.innerWidth;
            const height = window.innerHeight;
            document.getElementById('sizeInfo').innerHTML = `<h1>Width: ${width} and Height: ${height}</h1>`;
        }

        // Call the function initially to set the size on page load
        updateSizeInfo();

        // Add event listener to update the size whenever the window is resized
        window.addEventListener('resize', updateSizeInfo);