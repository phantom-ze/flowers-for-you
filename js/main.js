onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('I LOVE U ERIN').split('');
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 100); // 100ms delay for the title
      } else {
        // Append 5 hearts one by one with a delay
        let heartIndex = 0;

        function appendHeart() {
          if (heartIndex < 3) {
            const heartIcon = document.createElement('span');
            heartIcon.classList.add('material-icons', 'heart-icon');
            heartIcon.innerHTML = 'favorite'; // 'favorite' is the Material Icon for heart
            titleElement.appendChild(heartIcon);
            heartIndex++;
            setTimeout(appendHeart, 500); // 500ms delay between each heart
          }
        }

        appendHeart();
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
