import React, { useEffect, useRef } from 'react';

interface Location {
    address: string,
    lat: number,
    lng: number,
}

const map = ({ location }: { location: Location }) => {

    const mapRef = useRef(null);
    let map: google.maps.Map<Element> | undefined;

    <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>

    useEffect(() => {
        if(mapRef.current){
            const map = new google.maps.Map(mapRef.current, {
                center: { lat: location.lat, lng: location.lng },
                zoom: 14
            });
            new google.maps.Marker({
                position: { lat: location.lat, lng: location.lng },
                map: map
            });
    
            new google.maps.InfoWindow({
                content: location.address
            }).open(map, mapRef.current);
        }
    }, [location]);

    return <div ref={mapRef} style={{ height: '300px', width: '100%' }}></div>;
};