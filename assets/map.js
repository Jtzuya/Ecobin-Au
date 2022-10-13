let map;

function initMap() {
    const ecobin = { lat: -37.85021648812813, lng: 144.9955414979973 }

    map = new google.maps.Map(document.getElementById("map"), {
        center: ecobin,
        zoom: 15.75,
    });

    // const marker = new google.maps.Marker({
    //     title: 'Ecobin',
    //     position: ecobin,
    //     icon: {
    //         url: 'https://cdn.shopify.com/s/files/1/0602/9161/2772/files/ecobin-marker.svg?v=1664798821',
    //         scaledSize: new google.maps.Size(45, 60)
    //     },
    //     animation: google.maps.Animation.DROP
    // })

    // const infowindow = new google.maps.InfoWindow({
    //     content: "Ecobin",
    // })

    // marker.addListener('click', () => {
    //     infowindow.open(map, marker)
    // })
}

// window.initMap = initMap;