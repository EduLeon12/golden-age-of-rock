/*
 * Music app
 *
 */
const searchForm = document.querySelector('#search-form');
const searchResultEL = document.querySelector('#search-result-wrapper');
const tracksEl = document.querySelector('#search-tracks');
const errorEl = document.querySelector('#search-error');

// Fetch data based on query-string
const getData = async url => {
	const response = await fetch(url, {
		method: 'GET',
		headers: {
			'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
			'x-rapidapi-key': '5860b531a7msh3bd92ef36bbb87ep17062bjsneba0c800c401'
		}
	});

	if (!response.ok) {
		throw new Error('Response was not ok.');
	}

	return await response.json();
	 
};


// Get search results for tracks
const searchTracks = async search => {
	const tracks = await getData(
		`https://deezerdevs-deezer.p.rapidapi.com/search/track?q=${search}&limit=5`
	);

	if (tracks.error) {
		throw new Error('Could not fetch tracks.');
	}
	return tracks;
	
};

// Collect search results for tracks, limited to 5 items 
const searchAll = async search => {
	return {
		tracks: await searchTracks(`${search}&limit=5`)
	};
};


// Add search value to data-attribute
const saveSearch = search => {
	searchResultEL
		.querySelectorAll('header a')
		.forEach(a => a.setAttribute('data-search', search));
};

// Get all data related to specific artist
const getArtistInfo = async id => {
	const tracklist = await getData(
		`https://deezerdevs-deezer.p.rapidapi.com/artist/${id}/top?limit=5`
	);
	return tracklist;
};

// Render all tracks related to search result
const renderTrackResult = track => {
	tracksEl.querySelector('ul').innerHTML += `
		<li class="items-center list-group-item list-group-item-dark">
			<img src="${track.album.cover}"
				class="rounded-full list-group-item track-disc" id="trackImage" alt="">
			<div>
				<p class="mb-0">${track.title}</p>
				<p class="text-muted mb-0">
					<a href="#" data-artist="${track.artist.id}">${track.artist.name}</a>
					<video controls src="${track.preview}"  type="audio/mpeg" class="media-document audio items-center" id="trackPreview">  </video>
					
			</div>
		</li>`;
};


// Clear HTML elements
const clearInfo = element => {
	const elements = document.querySelectorAll(element);
	elements.forEach(el => {
		el.innerHTML = '';
		if (el.tagName === 'IMG') el.src = '';
	});
};

// Add 'display none' to all section elements
const hideElements = () => {
	console.log('applying d-none to sections');
	document
		.querySelectorAll('section')
		.forEach(section => section.classList.add('d-none'));
};

const handleSearchResults = searchResults => {
	const { tracks = false } = searchResults;

	// If results contains tracks
	if (tracks && tracks.total) {
		tracksEl.querySelector('ul').innerHTML = '';
		tracksEl.classList.remove('d-none');
		tracks.data.forEach(track => renderTrackResult(track));
	}

};



searchForm.addEventListener('submit', e => {
	// Prevent default action
	e.preventDefault();

	// Get search value
	const search = searchForm.search.value.trim().toLowerCase();
	saveSearch(search);

	// Reset page
	searchForm.reset();
	hideElements();

	// Search based on user input and handle results
	searchAll(search)
		.then(handleSearchResults)

});

document.querySelector('#tracks').addEventListener('click', async e => {
	// Prevent default action
	e.preventDefault();

	// Return if clicked element or parent element is not an a-tag
	if (!(e.target.tagName === 'A' || e.target.parentElement.tagName === 'A')) {
		return;
	}

	// Add 'display none' to all section elements
	hideElements();

	// Check if element has data attribute 'search'
	if (e.target.dataset.search) {
		const search = e.target.dataset.search;
		const type = e.target.dataset.type;

		// Get all search results based on type
		switch (type) {
			case 'track':
				searchTracks(search)
					.then(res => handleSearchResults({ tracks: res }))
				break;
		}
	}
});
