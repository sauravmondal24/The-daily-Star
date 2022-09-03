const url = 'https://openapi.programming-hero.com/api/news/category/08';

fetch(url)
	.then((res) => res.json())
	.then((data) => newsFeedDisplay(data.data))
	.catch((error) => console.log(error));

const newsFeedDisplay = (newses) => {
	let NewsCard = document.getElementById('news-card');
	NewsCard.textContent = '';

	// Item not Found section

	if (newses.length === 0) {
		document.getElementById('news-not-available').classList.remove('d-none');
		toggleLoader(false);
	} else {
		document.getElementById('news-not-available').classList.add('d-none');
	}

	// Items counter section
	const itemCounterSMS = document.getElementById('item-counter');
	itemCounterSMS.textContent = '';
	const itemsMessage = document.createElement('div');
	itemsMessage.innerHTML = `
	     <h5>${newses.length} items found for category Entertainment</h5>`;
	itemCounterSMS.appendChild(itemsMessage);

	newses.forEach((allInfo) => {
		let newsDisplay = document.createElement('div');
		newsDisplay.classList.add('card', 'my-5', 'p-4');

		newsDisplay.innerHTML = `

		 	<div class="row g-0  d-flex align-items-center">
				<div class="col-md-3">
					<img
					src="${allInfo.thumbnail_url ? allInfo.thumbnail_url : 'Data is not Found'}"
					class="img-fluid rounded-start"
					alt="..."
					style="width: 350px"
					/>
				</div>

				<div class="col-md-9">
					<div class="card-body">
						<h3 class="card-title">${
							allInfo.title ? allInfo.title : 'Data is not Found'
						}</h3>
						<p class="card-text">
							${allInfo.details ? allInfo.details.slice(1, 300) : 'Data Is not Found'}...
						</p>


						<div class="row justify-content-between align-items-center">
							<div class="col-md-4 post-owner">
								<div class="card border-0" style="max-width: 250px">
									<div class="row g-0">
										<div class="col-md-3 pt-2">
											<img
												id="author-pic"
												src="${allInfo.author ? allInfo.author.img : 'Data is not Found'}"
												class="rounded" 
												alt="..." 
												
											/>
										</div>
										<div class="col-md-9">
											<div class="card-body author-info">
												<h6 class="card-title">${
													allInfo.author
														? allInfo.author.name
														: 'Data is not Found'
												}</h6>
												<p class="card-text">${
													allInfo.author
														? allInfo.author.published_date
														: 'Data is not Found'
												}</p>
											</div>
										</div>
									</div>
								</div>
							</div>


							<div class="col-md-3">
								<h5><i class="fa-solid fa-eye"> </i> ${
									allInfo.total_view ? allInfo.total_view : 'Data is Not Found'
								} <span>M</span></h5>
							</div>
							<div class="col-md-3">
								<i class="fa-solid fa-star-half-stroke"></i>
								<i class="fa-regular fa-star"></i>
								<i class="fa-regular fa-star"></i>
								<i class="fa-regular fa-star"></i>
								<i class="fa-regular fa-star"></i>
							</div>
							<div class="col-md-2">
								<button onclick="NewsPageDetails('${allInfo._id}')" data-bs-toggle="modal"
								data-bs-target="#staticBackdrop" class="btn" href="#"
									><i class="fa-solid fa-arrow-right-long"></i
								></button>
								
							</div>
						</div>
					</div>
				</div>
	  		</div>
		
		`;
		NewsCard.appendChild(newsDisplay);
	});
};
