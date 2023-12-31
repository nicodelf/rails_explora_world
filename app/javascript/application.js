// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

// import Rails from "@rails/ujs"
// import Turbolinks from "turbolinks"
// import * as ActiveStorage from "@rails/activestorage"
// import "channels"
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"

// Rails.start()
// Turbolinks.start()
// ActiveStorage.start()

if (document.getElementById('earth')) {
  // MAPMONDE //
  function initialize() {
    var map = WE.map('map', {
      center: [36.057944835, -112.18688965],
      zoom: 3,
      dragging: true,
      scrollWheelZoom: true
    });
    var baselayer = WE.tileLayer('https://webglearth.github.io/webglearth2-offline/{z}/{x}/{y}.jpg', {
      tileSize: 256,
      bounds: [[-85, -180], [85, 180]],
      minZoom: 0,
      maxZoom: 16,
      attribution: 'WebGLEarth example',
      tms: true
    }).addTo(map);


    // rechercher les markers dans le DOM
    var markers = JSON.parse(document.getElementById("map").dataset.markers);
    var amazonia = JSON.parse(document.getElementById("map").dataset.amazonia);
    // console.log(markers)
    markers.forEach(function (marker) {
        WE.marker(marker).addTo(map)
    });

    //coordonnées amazonie en dur
    var coords = [-15.64, -62.12];
    var inputRandom = document.querySelector("#map input");
      inputRandom.addEventListener("click", function(e) {
      map.panTo([-10.971380, -30.826578]);
      var marker = WE.marker(coords).addTo(map);
      marker.bindPopup('<a id="popup" href=/offers/'.concat(amazonia).concat('>Discover me !</a>'), {maxWidth: 150, closeButton: true}).openPopup();
    })
  }

  initialize();
  // MAPMONDE //
}



// import "controllers"
// import "bootstrap"



/*
// Video handling

import  twilioInit  from '../plugins/twilio.js';



// pour forcer le rechargement du js quand la page est chargée par turbolinks
document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  if (document.querySelector('.proposal_primary_category')) {
    initFormProposal();
  }
  if (document.querySelector('.twilio-video')) {
    twilioInit();
  }
});
*/

// const rangeInputs = document.querySelectorAll('input[type="range"]')
// const numberInput = document.querySelector('input[type="number"]')

// function handleInputChange(e) {
//   let target = e.target
//   if (e.target.type !== 'range') {
//     target = document.getElementById('range')
//   }
//   const min = target.min
//   const max = target.max
//   const val = target.value

//   target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
// }

// rangeInputs.forEach(input => {
//   input.addEventListener('input', handleInputChange)
// })

// numberInput.addEventListener('input', handleInputChange)
