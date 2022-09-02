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
	var categoryId = data.category_id;

	for (const name of data) {
		let tabList = document.getElementById('tab-list');

		let li = document.createElement('li');

		li.innerHTML = `
        <li onclick="categoryDetails()" class="nav-item">
        <a class="nav-link fs-5 text-dark" aria-current="page" href="#">${name.category_name}</a>
        </li>
        `;

		tabList.appendChild(li);
	}
};

TabList();

let NewsFeed = async () => {
	let url = `https://openapi.programming-hero.com/api/news/category/01`;

	try {
		let res = await fetch(url);
		let data = await res.json();
		newsFeedDisplay(data.data);
	} catch (error) {
		console.log(error);
	}
};

let newsFeedDisplay = (data) => {
	// console.log(data);
	let NewsCard = document.getElementById('news-card');

	data.forEach((allInfo) => {
		console.log(allInfo);
		let newsDisplay = document.createElement('div');

		newsDisplay.classList.add('card', 'my-5');

		newsDisplay.innerHTML = `
		<div class="row g-0  d-flex align-items-center">
		<div class="col-md-3">
			<img
				src="${allInfo.thumbnail_url}"
				class="img-fluid rounded-start"
				alt="..."
				style="width: 350px"
			/>
		</div>
		<div class="col-md-9">
			<div class="card-body">
				<h3 class="card-title">${allInfo.title}</h3>
				<p class="card-text">
					${allInfo.details}
				</p>

				<div
					class="d-flex justify-content-between align-items-center"
				>
					<div class="post-owner">
						<div class="card border-0" style="max-width: 250px">
							<div class="row g-0">
								<div class="col-md-3 pt-3">
									<img
										src="${allInfo.author.img}"
										class="img-fluid rounded"
										alt="..."
									/>
								</div>
								<div class="col-md-9">
									<div class="card-body">
										<h6 class="card-title">${allInfo.author.name}</h6>
										<p class="card-text">${allInfo.author.published_date}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="2">
						<h5><i class="fa-solid fa-eye"> </i> ${allInfo.total_view} <span>M</span></h5>
					</div>
					<div class="3">
						<i class="fa-solid fa-star-half-stroke"></i>
						<i class="fa-regular fa-star"></i>
						<i class="fa-regular fa-star"></i>
						<i class="fa-regular fa-star"></i>
						<i class="fa-regular fa-star"></i>
					</div>
					<div class="4">
						<a class="btn" href="#"
							><i class="fa-solid fa-arrow-right-long"></i
						></a>
						
					</div>
				</div>
			</div>
		</div>
	  </div>
		
		
		
		`;
		NewsCard.appendChild(newsDisplay);
	});

	// console.log(data);
};

NewsFeed();
