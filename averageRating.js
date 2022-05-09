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
    
const avgRating = (productId) => {
    let sum = 0;
    let len;
    for (let i = 0; i < products.length; i++) {
      if (products[i]._id === productId) {
        len = products[i].ratings.length;
        for (let j = 0; j < len; j++) {
          if (len === 0) {
            return 0;
          } else {
            sum += products[i].ratings[j].rate;
          }
        }
      }
    }
    console.log(len);
    return sum / len;
  };
  
  console.log(avgRating("hedfcg"));
  
  