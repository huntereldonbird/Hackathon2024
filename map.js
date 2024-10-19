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
        function addFixedBuildingLabel(lat, lng, text) {
            var labelIcon = L.divIcon({
                className: 'building-label',
                html: text,
                iconSize: [100, 20],
                iconAnchor: [50, 10]
            });
            
            var marker = L.marker([lat, lng], {
                icon: labelIcon,
                pane: 'fixedLabels'
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
                        const [name, lat, lng] = line.split(',');
                        if (name && lat && lng) {
                            addFixedBuildingLabel(parseFloat(lat), parseFloat(lng), name).addTo(map);
                        }
                    });
                })
                .catch(error => console.error('Error fetching text file:', error));
        }

        // Initial call to add labels
        updateLabelsFromFile('labels.txt');

        // Set interval to update labels every 2 seconds
        setInterval(() => updateLabelsFromFile('labels.txt'), 2000);

        // The rest of your code (GeoJSON handling, etc.) remains unchanged
        var geoJsonLayer;

        function updateGeoJson() {
            fetch('/api-endpoint')
                .then(response => response.json())
                .then(data => {
                    if (geoJsonLayer) {
                        map.removeLayer(geoJsonLayer);
                    }
                    geoJsonLayer = L.geoJSON(data, {
                        style: function (feature) {
                            return {
                                color: "#ff7800",
                                weight: 2,
                                opacity: 0.65
                            };
                        },
                        onEachFeature: function (feature, layer) {
                            if (feature.properties && feature.properties.name) {
                                layer.bindPopup(feature.properties.name);
                            }
                        }
                    }).addTo(map);
                })
                .catch(error => console.error('Error fetching GeoJSON:', error));
        }

        // Initial call to load GeoJSON data
        updateGeoJson();

        // Set interval to update GeoJSON every 10 seconds
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
                function addFixedBuildingLabel(lat, lng, text) {
                    var labelIcon = L.divIcon({
                        className: 'building-label',
                        html: text,
                        iconSize: [100, 20],
                        iconAnchor: [50, 10]
                    });
                    
                    var marker = L.marker([lat, lng], {
                        icon: labelIcon,
                        pane: 'fixedLabels'
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
                                const [name, lat, lng] = line.split(',');
                                if (name && lat && lng) {
                                    addFixedBuildingLabel(parseFloat(lat), parseFloat(lng), name).addTo(map);
                                }
                            });
                        })
                        .catch(error => console.error('Error fetching text file:', error));
                }
        
                // Initial call to add labels
                updateLabelsFromFile('labels.txt');
        
                // Set interval to update labels every 2 seconds
                setInterval(() => updateLabelsFromFile('labels.txt'), 2000);
        
                // The rest of your code (GeoJSON handling, etc.) remains unchanged
                var geoJsonLayer;
        
                function updateGeoJson() {
                    fetch('/api-endpoint')
                        .then(response => response.json())
                        .then(data => {
                            if (geoJsonLayer) {
                                map.removeLayer(geoJsonLayer);
                            }
                            geoJsonLayer = L.geoJSON(data, {
                                style: function (feature) {
                                    return {
                                        color: "#ff7800",
                                        weight: 2,
                                        opacity: 0.65
                                    };
                                },
                                onEachFeature: function (feature, layer) {
                                    if (feature.properties && feature.properties.name) {
                                        layer.bindPopup(feature.properties.name);
                                    }
                                }
                            }).addTo(map);
                        })
                        .catch(error => console.error('Error fetching GeoJSON:', error));
                }
        
                // Initial call to load GeoJSON data
                updateGeoJson();
        
                // Set interval to update GeoJSON every 10 seconds
                setInterval(updateGeoJson, 2000);// Initialize the map centered on Rexburg
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
                        function addFixedBuildingLabel(lat, lng, text) {
                            var labelIcon = L.divIcon({
                                className: 'building-label',
                                html: text,
                                iconSize: [100, 20],
                                iconAnchor: [50, 10]
                            });
                            
                            var marker = L.marker([lat, lng], {
                                icon: labelIcon,
                                pane: 'fixedLabels'
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
                                        const [name, lat, lng] = line.split(',');
                                        if (name && lat && lng) {
                                            addFixedBuildingLabel(parseFloat(lat), parseFloat(lng), name).addTo(map);
                                        }
                                    });
                                })
                                .catch(error => console.error('Error fetching text file:', error));
                        }
                
                        // Initial call to add labels
                        updateLabelsFromFile('labels.txt');
                
                        // Set interval to update labels every 2 seconds
                        setInterval(() => updateLabelsFromFile('labels.txt'), 2000);
                
                        // The rest of your code (GeoJSON handling, etc.) remains unchanged
                        var geoJsonLayer;
                
                        function updateGeoJson() {
                            fetch('/api-endpoint')
                                .then(response => response.json())
                                .then(data => {
                                    if (geoJsonLayer) {
                                        map.removeLayer(geoJsonLayer);
                                    }
                                    geoJsonLayer = L.geoJSON(data, {
                                        style: function (feature) {
                                            return {
                                                color: "#ff7800",
                                                weight: 2,
                                                opacity: 0.65
                                            };
                                        },
                                        onEachFeature: function (feature, layer) {
                                            if (feature.properties && feature.properties.name) {
                                                layer.bindPopup(feature.properties.name);
                                            }
                                        }
                                    }).addTo(map);
                                })
                                .catch(error => console.error('Error fetching GeoJSON:', error));
                        }
                
                        // Initial call to load GeoJSON data
                        updateGeoJson();
                
                        // Set interval to update GeoJSON every 10 seconds
                        setInterval(updateGeoJson, 2000);// Initialize the map centered on Rexburg
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
                                function addFixedBuildingLabel(lat, lng, text) {
                                    var labelIcon = L.divIcon({
                                        className: 'building-label',
                                        html: text,
                                        iconSize: [100, 20],
                                        iconAnchor: [50, 10]
                                    });
                                    
                                    var marker = L.marker([lat, lng], {
                                        icon: labelIcon,
                                        pane: 'fixedLabels'
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
                                                const [name, lat, lng] = line.split(',');
                                                if (name && lat && lng) {
                                                    addFixedBuildingLabel(parseFloat(lat), parseFloat(lng), name).addTo(map);
                                                }
                                            });
                                        })
                                        .catch(error => console.error('Error fetching text file:', error));
                                }
                        
                                // Initial call to add labels
                                updateLabelsFromFile('labels.txt');
                        
                                // Set interval to update labels every 2 seconds
                                setInterval(() => updateLabelsFromFile('labels.txt'), 2000);
                        
                                // The rest of your code (GeoJSON handling, etc.) remains unchanged
                                var geoJsonLayer;
                        
                                function updateGeoJson() {
                                    fetch('/api-endpoint')
                                        .then(response => response.json())
                                        .then(data => {
                                            if (geoJsonLayer) {
                                                map.removeLayer(geoJsonLayer);
                                            }
                                            geoJsonLayer = L.geoJSON(data, {
                                                style: function (feature) {
                                                    return {
                                                        color: "#ff7800",
                                                        weight: 2,
                                                        opacity: 0.65
                                                    };
                                                },
                                                onEachFeature: function (feature, layer) {
                                                    if (feature.properties && feature.properties.name) {
                                                        layer.bindPopup(feature.properties.name);
                                                    }
                                                }
                                            }).addTo(map);
                                        })
                                        .catch(error => console.error('Error fetching GeoJSON:', error));
                                }
                        
                                // Initial call to load GeoJSON data
                                updateGeoJson();
                        
                                // Set interval to update GeoJSON every 10 seconds
                                setInterval(updateGeoJson, 2000);// Initialize the map centered on Rexburg
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
                                        function addFixedBuildingLabel(lat, lng, text) {
                                            var labelIcon = L.divIcon({
                                                className: 'building-label',
                                                html: text,
                                                iconSize: [100, 20],
                                                iconAnchor: [50, 10]
                                            });
                                            
                                            var marker = L.marker([lat, lng], {
                                                icon: labelIcon,
                                                pane: 'fixedLabels'
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
                                                        const [name, lat, lng] = line.split(',');
                                                        if (name && lat && lng) {
                                                            addFixedBuildingLabel(parseFloat(lat), parseFloat(lng), name).addTo(map);
                                                        }
                                                    });
                                                })
                                                .catch(error => console.error('Error fetching text file:', error));
                                        }
                                
                                        // Initial call to add labels
                                        updateLabelsFromFile('labels.txt');
                                
                                        // Set interval to update labels every 2 seconds
                                        setInterval(() => updateLabelsFromFile('labels.txt'), 2000);
                                
                                        // The rest of your code (GeoJSON handling, etc.) remains unchanged
                                        var geoJsonLayer;
                                
                                        function updateGeoJson() {
                                            fetch('/api-endpoint')
                                                .then(response => response.json())
                                                .then(data => {
                                                    if (geoJsonLayer) {
                                                        map.removeLayer(geoJsonLayer);
                                                    }
                                                    geoJsonLayer = L.geoJSON(data, {
                                                        style: function (feature) {
                                                            return {
                                                                color: "#ff7800",
                                                                weight: 2,
                                                                opacity: 0.65
                                                            };
                                                        },
                                                        onEachFeature: function (feature, layer) {
                                                            if (feature.properties && feature.properties.name) {
                                                                layer.bindPopup(feature.properties.name);
                                                            }
                                                        }
                                                    }).addTo(map);
                                                })
                                                .catch(error => console.error('Error fetching GeoJSON:', error));
                                        }
                                
                                        // Initial call to load GeoJSON data
                                        updateGeoJson();
                                
                                        // Set interval to update GeoJSON every 10 seconds
                                        setInterval(updateGeoJson, 2000);setInterval(updateGeoJson, 2000);
