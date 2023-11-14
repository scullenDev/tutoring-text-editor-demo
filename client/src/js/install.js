const butInstall = document.getElementById('buttonInstall');
let deferredPrompt;


// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  butInstall.style.display = block;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();

    const userChoice = await deferredPrompt.userChoice;

    if (userChoice.outcome === 'accepted') {
      console.log('User accepted PWA install!');
    } else {
      console.log('User denied PWA install!');
    }

    // flipping switch back off
    deferredPrompt = null;
    butInstall.style.display = none;
  }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => console.log('Yay, the PWS was installed!!!'));
