const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const app = {
  currentIndex: 0,
  products: [
    {
      id: 1,
      images: "assets/img/SavedPictures/SavedPictures/anh001.jpg",
      title: "Quần short nam",
      description: "aaaa",
      price: "$7",
      product_code: "AB001",
    },
    {
      id: 2,
      images: "assets/img/SavedPictures/SavedPictures/anh002.jpg",
      title: "Sơ mi kẻ sọc nam",
      description: "cccc",
      price: "$20",
      product_code: "AB002",
    },
    {
      id: 3,
      images: "assets/img/SavedPictures/SavedPictures/anh003.jpg",
      title: "chân váy nữ",
      description: "cccc",
      price: "$49",
      product_code: "AB003",
    },
    {
      id: 4,
      images: "assets/img/SavedPictures/SavedPictures/anh004.jpg",
      title: "áo mua đông (nam/nữ)",
      description: "cccc",
      price: "$60",
      product_code: "AB004",
    },
    {
      id: 5,
      images: "assets/img/SavedPictures/SavedPictures/anh005.jpg",
      title: "áo sơ mi cộc tay nữ",
      description: "cccc",
      price: "$21",
      product_code: "AB005",
    },
    {
      id: 6,
      images: "assets/img/SavedPictures/SavedPictures/anh006.jpg",
      title: "ÁO HAI DAY NỮ",
      description: "cccc",
      price: "$28",
      product_code: "AB006",
    },
    {
      id: 7,
      images: "assets/img/SavedPictures/SavedPictures/anh007.jpg",
      title: "Quần bò nam",
      description: "cccc",
      price: "$98",
      product_code: "AB007",
    },
    {
      id: 8,
      images: "assets/img/SavedPictures/SavedPictures/anh008.jpg",
      title: "áo sơ mi kẻ trắng nam",
      description: "cccc",
      price: "$48",
      product_code: "AB008",
    },
    {
      id: 9,
      images: "assets/img/SavedPictures/SavedPictures/anh009.jpg",
      title: "quần bò đùi nam",
      description: "cccc",
      price: "$59",
      product_code: "AB009",
    },
    {
      id: 10,
      images: "assets/img/SavedPictures/SavedPictures/anh010.jpg",
      title: "áo hodde đỏ (nam/nữ)",
      description: "cccc",
      price: "$80",
      product_code: "AB010",
    },
    {
      id: 11,
      images: "assets/img/SavedPictures/SavedPictures/anh011.jpg",
      title: "áo sơ mi cổ tay xọc đen nam",
      description: "cccc",
      price: "$96",
      product_code: "AB011",
    },
    {
      id: 12,
      images: "assets/img/SavedPictures/SavedPictures/anh012.jpg",
      title: "áo ngắn nữ",
      description: "cccc",
      price: "$34",
      product_code: "AB012",
    },
    {
      id: 13,
      images: "assets/img/SavedPictures/SavedPictures/anh013.jpg",
      title: "áo cộc 3 khuy nữ",
      description: "cccc",
      price: "$90",
      product_code: "AB013",
    },
    {
      id: 14,
      images: "assets/img/SavedPictures/SavedPictures/anh014.jpg",
      title: "Quần bò nữ",
      description: "cccc",
      price: "$20",
      product_code: "AB014",
    },
    {
      id: 15,
      images: "assets/img/SavedPictures/SavedPictures/anh015.jpg",
      title: "áo hồng kẻ nam",
      description: "cccc",
      price: "$65",
      product_code: "AB015",
    },
    {
      id: 16,
      images: "assets/img/SavedPictures/SavedPictures/anh016.jpg",
      title: "quàn bò bó gối nam",
      description: "cccc",
      price: "$20",
      product_code: "AB016",
    },
    {
      id: 17,
      images: "assets/img/SavedPictures/SavedPictures/anh017.jpg",
      title: "ao khoac dày nam",
      description: "cccc",
      price: "$98",
      product_code: "AB017",
    },
    {
      id: 18,
      images: "assets/img/SavedPictures/SavedPictures/anh018.jpg",
      title: "áo guuci nam",
      description: "cccc",
      price: "$54",
      product_code: "AB018",
    },
    {
      id: 19,
      images: "assets/img/SavedPictures/SavedPictures/anh019.png",
      title: "bộ thể thao nam",
      description: "cccc",
      price: "$12",
      product_code: "AB019",
    },
    {
      id: 20,
      images: "assets/img/SavedPictures/SavedPictures/anh020.jpg",
      title: "áo ba lỗ adiads nam",
      description: "cccc",
      price: "$14",
      product_code: "AB020",
    },
    {
      id: 21,
      images: "assets/img/SavedPictures/SavedPictures/anh021.jpg",
      title: "áo tua trăng nữ",
      description: "cccc",
      price: "$67",
      product_code: "AB021",
    },
    {
      id: 22,
      images: "assets/img/SavedPictures/SavedPictures/anh022.jpg",
      title: "áo croptop nữ",
      description: "cccc",
      price: "$33",
      product_code: "AB022",
    },
    {
      id: 23,
      images: "assets/img/SavedPictures/SavedPictures/anh023.jpg",
      title: "chân váy hoa nữ",
      description: "cccc",
      price: "$20",
      product_code: "AB023",
    },
    {
      id: 24,
      images: "assets/img/SavedPictures/SavedPictures/anh024.jpg",
      title: "áo nen logan (nam/nữ)",
      description: "cccc",
      price: "$68",
      product_code: "AB024",
    },
    {
      id: 25,
      images: "assets/img/SavedPictures/SavedPictures/anh025.jpg",
      title: "Sơ mi kẻ sọc nam",
      description: "cccc",
      price: "$20",
      product_code: "AB025",
    },
    {
      id: 26,
      images: "assets/img/SavedPictures/SavedPictures/anh026.jpg",
      title: "Sơ mi kẻ sọc nam",
      description: "cccc",
      price: "$20",
      product_code: "AB026",
    },
    {
      id: 27,
      images: "assets/img/SavedPictures/SavedPictures/anh027.jpg",
      title: "Sơ mi kẻ sọc nam",
      description: "cccc",
      price: "$20",
      product_code: "AB027",
    },
    {
      id: 28,
      images: "assets/img/SavedPictures/SavedPictures/anh026.jpg",
      title: "Sơ mi kẻ sọc nam",
      description: "cccc",
      price: "$20",
      product_code: "AB02",
    },
    {
      id: 29,
      images: "assets/img/SavedPictures/SavedPictures/anh026.jpg",
      title: "Sơ mi kẻ sọc nam",
      description: "cccc",
      price: "$20",
      product_code: "AB02",
    },
    {
      id: 30,
      images: "assets/img/SavedPictures/SavedPictures/anh026.jpg",
      title: "Sơ mi kẻ sọc nam",
      description: "cccc",
      price: "$20",
      product_code: "AB02",
    },
    {
      id: 31,
      images: "assets/img/SavedPictures/SavedPictures/anh026.jpg",
      title: "Sơ mi kẻ sọc nam",
      description: "cccc",
      price: "$20",
      product_code: "AB02",
    },
  ],
 



  renderIndex: function(){
    const productIndex = this.products.map((productA) => {
        return `
            <div class="card-1">
            <span class="like"><i class="fas fa-heart"></i></span>
            <span class="cart"><i class="fas fa-cart-arrow-down"></i></span>
            <div class="card__img">
                <img src="${productA.images}" alt="" />
            </div>
            <h2 class="card__title">${productA.title}</h2>
            <p class="card__price">${productA.price}</p>
            <div class="card__size">
                <h3>Size:</h3>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
            </div>
            
            <div class="card__action">
                <button>Buy now</button>
                <button>Add cart</button>
            </div>
        </div>
    `
    });
   
    $('.product-index').innerHTML = productIndex.join('');
  
  },

  start: function () {
      this.renderIndex();
    
  },
};

app.start();
