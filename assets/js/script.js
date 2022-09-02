// Tab List Start

let TabList = async () => {
	let url = `https://openapi.programming-hero.com/api/news/categories`;

	try {
		let res = await fetch(url);
		let data = await res.json();
		tabDataDisplay(data.data.news_category);
	} catch (error) {
		console.log(error);
	}
};

let tabDataDisplay = (data) => {
	for (const name of data) {
		console.log(name.category_name);

		let tabList = document.getElementById('tab-list');

		let li = document.createElement('li');

		li.innerHTML = `
        <li class="nav-item">
        <a class="nav-link fs-5 text-dark" aria-current="page" href="#">${name.category_name}</a>
        </li>
        `;

		tabList.appendChild(li);
	}
	// console.log(data);
};

TabList();
