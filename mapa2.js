document.addEventListener("DOMContentLoaded", function () {
    map = L.map("mapid").setView([19.4, -99.4], 10)
    
    // Tiles de open street maps
    //L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
    }).addTo(map);


    L.polygon([
        [19.414063885684964, -99.0526270866394],
        [19.417322108632224, -99.05112504959108],
        [19.415480512382032, -99.04659748077394],
        [19.412040111847173, -99.048228263855]
    ]).addTo(map)

    L.polyline([[19.415338850267837, -99.07228231430055],
    [19.40953059730434, -99.07756090164186],
    [19.412161538987835, -99.08275365829469],
    [19.41452935010426, -99.08706665039064],
    [19.41651261834488, -99.09037113189697],
    [19.418617284706656, -99.09399747848512],
    [19.419952924223722, -99.09637928009035],
    [19.422118255875223, -99.10034894943239],
    [19.423190792643595, -99.10247325897218],
    [19.42531560873183, -99.10670042037965],
    [19.427177329511515, -99.11049842834474],
    [19.4294842147927, -99.11468267440797],
    [19.42934256488616, -99.12034749984741],
    [19.42572033245525, -99.1256046295166],
    [19.425942930073393, -99.13302898406984],
    [19.42652977687748, -99.137921333313]]).addTo(map)


})


// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(mymap);