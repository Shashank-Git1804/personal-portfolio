import React, { useEffect, useRef } from "react";

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 12.9440, lng: 77.6056 },
        zoom: 15,
        styles: [ // Dark mode style
          {
            "elementType": "geometry",
            "stylers": [{ "color": "#212121" }]
          },
          {
            "elementType": "labels.icon",
            "stylers": [{ "visibility": "off" }]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#757575" }]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [{ "color": "#212121" }]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [{ "color": "#757575" }]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{ "color": "#2c2c2c" }]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{ "color": "#383838" }]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{ "color": "#000000" }]
          }
        ]
      });
    };

    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE`;
      document.head.appendChild(script);
      script.addEventListener("load", initMap);
    } else {
      initMap();
    }
  }, []);

  return <div ref={mapRef} className="contact-map" style={{ width: "100%", height: "400px", borderRadius: "12px" }} />;
};

export default MapComponent;
