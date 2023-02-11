// Unsplash API
const count = 10;
const apiKey = 'R-cBdAEqiMtP18fab95tEwxmfSUv4mlTSUHBTERDYQ4';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch error here
    }
}

// On Load
getPhotos();