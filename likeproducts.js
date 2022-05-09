const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
    ];
    
const likeProduct = (productId, userId) => {
    for (let i = 0; i < products.length; i++) {
      if (products[i]._id === productId) {
        const likes = products[i].likes;
        const index = products[i].likes.indexOf(userId);
        if (index !== -1) {
          products[i].likes.splice(index, 1);
        } else {
          products[i].likes.push(userId);
        }
      }
    }
  };
  likeProduct("eedfcf", "ghderc");
  likeProduct("eedfcf", "ab12ex");
  console.log(products);