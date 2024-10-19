// Initialize the map centered on Rexburg
var map = L.map('map').setView([43.81446342086511, -111.7847698378428], 19);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Create a custom pane for fixed labels
map.createPane('fixedLabels');
map.getPane('fixedLabels').style.zIndex = 650;
map.getPane('fixedLabels').style.pointerEvents = 'none';

// Store all label markers
var labelMarkers = [];


// Function to add fixed building labels
function addFixedBuildingLabel(lat, lng, text, insideText, color) {

    var labelIcon = L.divIcon({
        className: 'building-label',
        html:  `
        <div style="
            width: 100%; 
            height: 100%; 
            border-radius: 5px; 
            text-align: center;
            background-color: ${color};
            ">
            ${text} ppl 
        </div>
    `,
        iconSize: [70, 45],
        iconAnchor: [50, 10],
        
    });

    var marker = L.marker([lat, lng], {
        icon: labelIcon,
        pane: 'fixedLabels'
    });

    // Add an event listener to the marker
    marker.on('click', function (event) {
        
        // Create a popup with the text description
        var popup = L.popup()
            .setLatLng([lat, lng])
            .setContent(`<p>${insideText}</p>`)
            .openOn(map);
    });

    labelMarkers.push(marker);
    return marker;
}

// Function to clear all existing labels
function clearLabels() {
    labelMarkers.forEach(marker => map.removeLayer(marker));
    labelMarkers = [];
}

// Function to add fixed building labels from a text file
function updateLabelsFromFile(filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            clearLabels(); // Clear existing labels
            const lines = data.split('\n');
            lines.forEach(line => {
                const [name, lat, lng, inside] = line.split(',');
                if (name && lat && lng) {  
                    var color = "#BDE7BD";
                    if(name.replace("|","").split(" ")[1] > 3) {color = "#FFB6B3";}
                    addFixedBuildingLabel(parseFloat(lat), parseFloat(lng), name.replace("|",""), inside.replace("|",""), color).addTo(map);
                }
            });
        })
        .catch(error => console.error('Error fetching text file:', error));
}

// Initial call to add labels
updateLabelsFromFile('labels.txt');

// Set interval to update labels every 2 seconds
setInterval(() => updateLabelsFromFile('labels.txt'), 2000);