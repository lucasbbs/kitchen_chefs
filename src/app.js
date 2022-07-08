function generatePrices() {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(Math.floor(Math.random() * 100) * 10);
}

function getHashedPicture(input, gender) {
  console.log(input, gender);
  var hash = 0,
    len = input.length;
  for (var i = 0; i < len; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0; // to 32bit integer
  }

  return `https://randomuser.me/api/portraits/${
    gender === 'Male' ? 'men' : 'women'
  }/${String(Math.abs(hash)).slice(0, 2)}.jpg`;
}

function displaySuccess() {
  const successMsg = document.querySelector('#success-id');
  successMsg.classList.remove('success-hide');
  setTimeout(() => {
    successMsg.classList.add('success-hide');
  }, 1000);
}

function promptMessage() {
  prompt('Enter Your Message:', '');
}

/* global instantsearch */

const search = instantsearch({
  appId: '2U53CAWX8Q',
  apiKey: '64de23065490d0b8f9d5fa6e0ba933cc',
  indexName: 'kitchen_chefs',
  searchParameters: {
    hitsPerPage: 6,
    getRankingInfo: true,
    aroundLatLngViaIP: true,
    typoTolerance: 'min',
  },
});

// Uncomment the following widget to add a map.

const InfoWindow = new window.google.maps.InfoWindow();

search.addWidget(
  instantsearch.widgets.geoSearch({
    container: '#map',
    googleReference: window.google,
    initialZoom: 4,
    mapOptions: {
      streetViewControl: false,
      mapTypeControl: false,
      zoom: 4,
      minZoom: 1,
      maxZoom: 6,
      styles: [{ stylers: [{ hue: '#3596D2' }] }],
    },
    enableRefineControl: false,
    enableRefineOnMapMove: false,
    enableClearMapRefinement: false,
    builtInMarker: {
      events: {
        click: ({ item, marker, map }) => {
          if (InfoWindow.getMap()) InfoWindow.close();
          InfoWindow.setContent(
            `${item.first_name} ${item.last_name}<br>
            ${item.region}<br>
            ${item.country}`
          );
          InfoWindow.open(map, marker);
        },
      },
    },
  })
);

// Uncomment the following widget to add a search bar.

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: 'Search kitchen chefs per name, country or region',
    autofocus: false,
  })
);

// Uncomment the following widget to add hits list.

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      empty: 'No results.',
      item(hit) {
        return `<h2 class="hit-name">
              <span class="hit-airport-name">
                ${hit._highlightResult.first_name.value} 
                ${hit._highlightResult.last_name.value}
                
              </span></h2>
        <div class="wrapper">
          <div class="hit">
            
              <img class='picture' src=${getHashedPicture(
                hit._highlightResult.first_name.value,
                hit.gender
              )} /><br>
              
            
            <p class="hit-location"><small> ${
              hit._highlightResult.region.value
            }</small><br>
              ${hit._highlightResult.country.value}<br />
              <span class="hit-distance">
                ${
                  hit._rankingInfo && hit._rankingInfo.matchedGeoLocation
                    ? `<span>
                ${parseInt(
                  hit._rankingInfo.matchedGeoLocation.distance / 1000,
                  10
                )}km away,
              </span>`
                    : ''
                }
              </span>

            </p>
          </div><div>
          <h3 class='description'>Description</h3>
          <p class="description-paragraph" >${
            hit._highlightResult.description.value
          }<br>
          <button onclick="promptMessage()" class='color-button-secondary'><span class='text-button'>
          <i class='fa-brands fa-telegram' aria-hidden='true' ></i>  Chat
          </span>
          </button>
          <button onclick="displaySuccess()" class='color-button-primary'>
          <span class='text-button'>
          <i class="fa-solid fa-comment-dollar"></i>  Book Now!!</span>
          </button>
          </p>
          <h2>${generatePrices()}</h2>
          </div>
          </div>
        `;
      },
    },
  })
);

// Uncomment the following widget to add search stats.
/*
search.addWidget(
  instantsearch.widgets.stats({
    container: "#stats",
    templates: {
      body(hit) {
        return `<span role="img" aria-label="emoji">⚡️</span> <strong>${
          hit.nbHits
        }</strong> results found ${
          hit.query != "" ? `for <strong>"${hit.query}"</strong>` : ``
        } in <strong>${hit.processingTimeMS}ms</strong>`;
      }
    }
  })
);*/

// Uncomment the following widget to add brands list.

/*search.addWidget(
  instantsearch.widgets.refinementList({
    container: "#countries",
    attributeName: "country",
    searchForFacetValues: true,
    autoHideContainer: true,
    templates: {
      header: "Countries"
    }
  })
);*/

// Uncomment the following widget to add price range.

/*search.addWidget(
  instantsearch.widgets.rangeSlider({
    container: "#price",
    autoHideContainer: true,
    attributeName: "price",
    templates: {
      header: "Price"
    }
  })
);*/
search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
    attributeName: 'country',
    min: 0,
    max: 9999,
  })
);

search.addWidget(
  instantsearch.widgets.menuSelect({
    searchForFacetValues: true,
    autoHideContainer: false,
    container: '#countries',
    attributeName: 'country',
    templates: {
      header: 'Countries',
    },
  })
);

search.start();

console.log(search);
