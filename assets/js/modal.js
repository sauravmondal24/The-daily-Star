const NewsPageDetails = (news_id) => {
	const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
	fetch(url)
		.then((res) => res.json())
		.then((data) => displayNewsPage(data.data))
		.catch((error) => console.log(error));
};

const displayNewsPage = (newsInfos) => {
	newsInfos.forEach((newsInfo) => {
		let modalTitle = document.getElementById('staticBackdropLabel');
		let modalBody = document.getElementById('modal-body');

		modalTitle.innerText = `${newsInfo.title}`;

		modalBody.innerHTML = `

        <img class="img-fluid rounded-start" style="width: 100%; height: 400px" src="${newsInfo.image_url}" alt="">
        <p class="card-text py-3">${newsInfo.details}</p>

        <div class="d-flex justify-content-between align-items-center">
        <div class="post-owner">
            <div class="card border-0" style="max-width: 250px">
                <div class="row g-0">
                    <div class="col-md-3 pt-3">
                        <img
                            src="${newsInfo.author.img}"
                            class="img-fluid rounded"
                            alt="..."
                        />
                    </div>
                    <div class="col-md-9">
                        <div class="card-body">
                            <h6 class="card-title">${newsInfo.author.name}</h6>
                            <p class="card-text">${newsInfo.author.published_date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="2">
            <h5><i class="fa-solid fa-eye"> </i> ${newsInfo.total_view} <span>M</span></h5>
        </div>
        <div class="3">
            <i class="fa-solid fa-star-half-stroke"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </div>
        
    </div>

  
        
        
        `;

		modalSection.appendChild(modalDisplay);
	});
};
