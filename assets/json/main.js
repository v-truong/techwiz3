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
<<<<<<< Updated upstream
=======
      sex: "men",
>>>>>>> Stashed changes
      product_code: "AB001",
    },
    {
      id: 2,
      images: "assets/img/SavedPictures/SavedPictures/anh002.jpg",
      title: "Sơ mi kẻ sọc nam",
      description: "cccc",
      price: "$20",
<<<<<<< Updated upstream
=======
      sex: "men",
>>>>>>> Stashed changes
      product_code: "AB002",
    },
    {
      id: 3,
      images: "assets/img/SavedPictures/SavedPictures/anh003.jpg",
      title: "chân váy nữ",
      description: "cccc",
      price: "$49",
<<<<<<< Updated upstream
=======
      sex: "women",
>>>>>>> Stashed changes
      product_code: "AB003",
    },
    {
      id: 4,
      images: "assets/img/SavedPictures/SavedPictures/anh004.jpg",
      title: "áo mua đông (nam/nữ)",
      description: "cccc",
      price: "$60",
<<<<<<< Updated upstream
=======
      gender: 'unisex',
>>>>>>> Stashed changes
      product_code: "AB004",
    },
    {
      id: 5,
<<<<<<< Updated upstream
      images: "assets/img/SavedPictures/SavedPictures/anh005.jpg",
      title: "áo sơ mi cộc tay nữ",
      description: "cccc",
      price: "$21",
=======
      images: "assets/img/SavedPictures/SavedPictures/anh027.jpg",
      title: "áo sơ mi cộc tay nữ",
      description: "cccc",
      price: "$21",
      sex:"women",
>>>>>>> Stashed changes
      product_code: "AB005",
    },
    {
      id: 6,
      images: "assets/img/SavedPictures/SavedPictures/anh006.jpg",
      title: "ÁO HAI DAY NỮ",
      description: "cccc",
      price: "$28",
<<<<<<< Updated upstream
=======
      sex:"women",
>>>>>>> Stashed changes
      product_code: "AB006",
    },
    {
      id: 7,
      images: "assets/img/SavedPictures/SavedPictures/anh007.jpg",
      title: "Quần bò nam",
      description: "cccc",
      price: "$98",
<<<<<<< Updated upstream
=======
      sex:"men",
>>>>>>> Stashed changes
      product_code: "AB007",
    },
    {
      id: 8,
      images: "assets/img/SavedPictures/SavedPictures/anh008.jpg",
      title: "áo sơ mi kẻ trắng nam",
      description: "cccc",
      price: "$48",
<<<<<<< Updated upstream
=======
      sex:"men",
>>>>>>> Stashed changes
      product_code: "AB008",
    },
    {
      id: 9,
      images: "assets/img/SavedPictures/SavedPictures/anh009.jpg",
      title: "quần bò đùi nam",
      description: "cccc",
      price: "$59",
<<<<<<< Updated upstream
=======
      sex:"men",
>>>>>>> Stashed changes
      product_code: "AB009",
    },
    {
      id: 10,
      images: "assets/img/SavedPictures/SavedPictures/anh010.jpg",
      title: "áo hodde đỏ (nam/nữ)",
      description: "cccc",
      price: "$80",
<<<<<<< Updated upstream
=======
      gender: 'unisex',
>>>>>>> Stashed changes
      product_code: "AB010",
    },
    {
      id: 11,
      images: "assets/img/SavedPictures/SavedPictures/anh011.jpg",
      title: "áo sơ mi cổ tay xọc đen nam",
      description: "cccc",
      price: "$96",
<<<<<<< Updated upstream
=======
      sex:"men",
>>>>>>> Stashed changes
      product_code: "AB011",
    },
    {
      id: 12,
      images: "assets/img/SavedPictures/SavedPictures/anh012.jpg",
      title: "áo ngắn nữ",
      description: "cccc",
      price: "$34",
<<<<<<< Updated upstream
=======
      sex:"women",
>>>>>>> Stashed changes
      product_code: "AB012",
    },
    {
      id: 13,
      images: "assets/img/SavedPictures/SavedPictures/anh013.jpg",
      title: "áo cộc 3 khuy nữ",
      description: "cccc",
      price: "$90",
<<<<<<< Updated upstream
=======
      sex:"women",
>>>>>>> Stashed changes
      product_code: "AB013",
    },
    {
      id: 14,
      images: "assets/img/SavedPictures/SavedPictures/anh014.jpg",
      title: "Quần bò nữ",
      description: "cccc",
      price: "$20",
<<<<<<< Updated upstream
=======
      sex:"women",
>>>>>>> Stashed changes
      product_code: "AB014",
    },
    {
      id: 15,
      images: "assets/img/SavedPictures/SavedPictures/anh015.jpg",
      title: "áo hồng kẻ nam",
      description: "cccc",
      price: "$65",
<<<<<<< Updated upstream
=======
      sex:"men",
>>>>>>> Stashed changes
      product_code: "AB015",
    },
    {
      id: 16,
      images: "assets/img/SavedPictures/SavedPictures/anh016.jpg",
      title: "quàn bò bó gối nam",
      description: "cccc",
      price: "$20",
<<<<<<< Updated upstream
=======
      sex:"men",
>>>>>>> Stashed changes
      product_code: "AB016",
    },
    {
      id: 17,
      images: "assets/img/SavedPictures/SavedPictures/anh017.jpg",
      title: "ao khoac dày nam",
      description: "cccc",
      price: "$98",
<<<<<<< Updated upstream
=======
      sex:"men",
>>>>>>> Stashed changes
      product_code: "AB017",
    },
    {
      id: 18,
      images: "assets/img/SavedPictures/SavedPictures/anh018.jpg",
      title: "áo guuci nam",
      description: "cccc",
      price: "$54",
<<<<<<< Updated upstream
=======
      sex: "men",
>>>>>>> Stashed changes
      product_code: "AB018",
    },
    {
      id: 19,
      images: "assets/img/SavedPictures/SavedPictures/anh019.png",
      title: "bộ thể thao nam",
      description: "cccc",
      price: "$12",
<<<<<<< Updated upstream
=======
      sex: "men",
>>>>>>> Stashed changes
      product_code: "AB019",
    },
    {
      id: 20,
      images: "assets/img/SavedPictures/SavedPictures/anh020.jpg",
      title: "áo ba lỗ adiads nam",
      description: "cccc",
      price: "$14",
<<<<<<< Updated upstream
=======
      sex:"men",
>>>>>>> Stashed changes
      product_code: "AB020",
    },
    {
      id: 21,
      images: "assets/img/SavedPictures/SavedPictures/anh021.jpg",
      title: "áo tua trăng nữ",
      description: "cccc",
      price: "$67",
<<<<<<< Updated upstream
=======
      sex:"women",
>>>>>>> Stashed changes
      product_code: "AB021",
    },
    {
      id: 22,
      images: "assets/img/SavedPictures/SavedPictures/anh022.jpg",
      title: "áo croptop nữ",
      description: "cccc",
      price: "$33",
<<<<<<< Updated upstream
=======
      sex:"women",
>>>>>>> Stashed changes
      product_code: "AB022",
    },
    {
      id: 23,
      images: "assets/img/SavedPictures/SavedPictures/anh023.jpg",
      title: "chân váy hoa nữ",
      description: "cccc",
      price: "$20",
<<<<<<< Updated upstream
=======
      sex:"women",
>>>>>>> Stashed changes
      product_code: "AB023",
    },
    {
      id: 24,
      images: "assets/img/SavedPictures/SavedPictures/anh024.jpg",
      title: "áo nen logan (nam/nữ)",
      description: "cccc",
      price: "$68",
<<<<<<< Updated upstream
=======
      gender: 'unisex',
>>>>>>> Stashed changes
      product_code: "AB024",
    },
    {
      id: 25,
      images: "assets/img/SavedPictures/SavedPictures/anh025.jpg",
      title: "Sơ mi kẻ sọc nam",
      description: "cccc",
      price: "$20",
<<<<<<< Updated upstream
=======
      sex:"men",
>>>>>>> Stashed changes
      product_code: "AB025",
    },
    {
      id: 26,
      images: "assets/img/SavedPictures/SavedPictures/anh026.jpg",
      title: "Sơ mi kẻ sọc nam",
      description: "cccc",
      price: "$20",
<<<<<<< Updated upstream
=======
      sex:"men",
>>>>>>> Stashed changes
      product_code: "AB026",
    },
    {
      id: 27,
      images: "assets/img/SavedPictures/SavedPictures/anh027.jpg",
      title: "Sơ mi kẻ sọc nam",
      description: "cccc",
      price: "$20",
<<<<<<< Updated upstream
=======
      sex:"men",
>>>>>>> Stashed changes
      product_code: "AB027",
    },
    {
      id: 28,
<<<<<<< Updated upstream
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
=======
      images: "assets/img/SavedPictures/SavedPictures/anh028.jpg",
      title: "bộ sơ mi cộc tay trắng",
      description: "cccc",
      price: "$90",
      gender: 'unisex',
      product_code: "AB028",
    },
    {
      id: 29,
      images: "assets/img/SavedPictures/SavedPictures/anh029.jpg",
      title: "Sơ mi kẻ sọc nam",
      description: "cccc",
      price: "$20",
      sex:"men",
      product_code: "AB029",
    },
    {
      id: 30,
      images: "assets/img/SavedPictures/SavedPictures/anh030.jpg",
      title: "bộ quần áo nữ",
      description: "cccc",
      price: "$65",
      sex:"women",
      product_code: "AB030",
    },
    {
      id: 31,
      images: "assets/img/SavedPictures/SavedPictures/anh031.jpg",
      title: "chân váy trắng nữ",
      description: "cccc",
      price: "$88",
      sex:"women",
      product_code: "AB031",
>>>>>>> Stashed changes
    },
  ],
 

  renderProduct: function () {
    const htmls = this.products.map((product) => {
      return `
            <div class="col-sm-3">
                <div class="product">
                    <div class="product-img-info">
                        <!--a href="" class="product__link"-->
                        <span data-target="#myModal"> <img  src="${product.images}" class="product__img" alt="" ></span>
                            <div class="product__sale">
                                SALE!
                            </div>
                        <!--/a-->
                        <div class="item-box-hover">
                            <div class="cart-wrap">
                                <i class="fas fa-shopping-cart"></i> ADD TO CART
                            </div>
                            <div class="box-inner v-center">
                                <a href="" class="box-inner__item wishlist">
                                    <i class="fas fa-heart"></i>
                                    <div class="icon-script">Add to Wishlist</div>
                                </a>
                                <a href="" class="box-inner__item compare">
                                    <i class="fas fa-random"></i>
                                    <div class="icon-script">Compare</div>

                                </a>
                                <a href="" class="box-inner__item view">
                                    <i class="fas fa-eye"></i>
                                    <div class="icon-script">Quick View</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <a href="" class="product__name">${product.title}</a>
                    <div class="product__price">
                        <span class="old-price">${product.price}</span>
                    </div>
                    <div class="product__rating">
                        <i class="far fa-star fas fa-star--gold"></i>
                        <i class="far fa-star fas fa-star--gold"></i>
                        <i class="fas fa-star fas fa-star--gold"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
        </div>
        `;
    });
    $(".product--container").innerHTML = htmls.join("");
<<<<<<< Updated upstream
    // $('.product-index').innerHTML = htmls.join('');
    $('.product').innerHTML = htmls.join('');
  },


  start: function () {
      this.renderProduct();
     
    
  },
};

app.start();
=======
    
  
  },

  start: function () {
      this.renderProduct();
      this.showProductDetail();
    
  },
};

app.start();
///truong code
>>>>>>> Stashed changes
