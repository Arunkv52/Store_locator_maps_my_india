var map;

function initMap1() {
    map = new mappls.Map("map", {
        center: [28.61, 77.23],
        zoomControl: true,
        location: true,
    });
    map.addListener("load", function () {
        var geoData = {
            type: "FeatureCollection",
            features: [{
                    type: "Feature",
                    properties: {
                        htmlPopup: "<div><h3>KUN ISUZU</h3><p><strong>Address:</strong> B14, 2nd St, 2nd sector, Industrial Estate, Ambattur, Chennai, Tamil Nadu 600058</p><p><strong>Phone:</strong> +91 72994 02000</p><a href='https://maps.app.goo.gl/Fb66cFcvZh8oGKiR6'>Direction</a></div>",
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [13.043449565730581, 80.24322207786444],
                    },
                },
                {
                    type: "Feature",
                    properties: {
                        htmlPopup: "<div><h3>KUN ISUZU</h3><p><strong>Address:</strong> Sidha Steels Campus,SF521,Avinashi Road,Mudalipalayam Pirivu,Arasur, post, Coimbatore, Tamil Nadu 641407.</p><p><strong>Phone:</strong> +91 82200 46447</p><a href='https://maps.app.goo.gl/VzGQswJCRiHigwLh7'>Direction</a></div>",
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [11.070830853800079, 77.10444091529693],
                    },
                },
                {
                    type: "Feature",
                    properties: {
                        htmlPopup: "<div><h3>AR.A.S - ISUZU</h3><p><strong>Address:</strong> 28, Service Rd, Industrial Estate, Kappalur,Madurai, Tamil Nadu 625008.</p><p><strong>Phone:</strong> +91 78670 11377</p><a href='https://maps.app.goo.gl/yNkDbZH5GuLMScNs9'>Direction</a></div>",
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [9.924183396671719, 78.01260864548402],
                    },
                },
                {
                    type: "Feature",
                    properties: {
                        htmlPopup: "<div><h3>Sml isuzu trichy</h3><p><strong>Address:</strong> Melapudur Main Rd, Melapudur, Sangillyandapuram, Tiruchirappalli, Tamil Nadu 620001.</p><p><strong>Phone:</strong> +91 78670 11377</p><a href='https://maps.app.goo.gl/xVAsWNPG3hLZooCZA'>Direction</a></div>",
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [10.800949277662172, 78.68272764929254],
                    },
                }
            ],
        };
        var marker = mappls.Marker({
            map: map,
            position: geoData,
            icon_url: "https://apis.mapmyindia.com/map_v3/1.png",
            fitbounds: true,
            clusters: true,
            clustersIcon: "https://mappls.com/images/2.png",
            fitboundOptions: {
                padding: 80,
                duration: 1000,
            },
            popupOptions: {
                offset: {
                    bottom: [0, -20],
                },
            },
        });
    });
}