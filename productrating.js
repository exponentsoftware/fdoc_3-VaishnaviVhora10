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

    const rateProduct = (productId, userId, ratingPoint) => {
        let found = false;
        for (let i = 0; i < products.length; i++) {
          if (products[i]._id === productId) {
            for (let j = 0; j < products[i].ratings.length; j++) {
              if (products[i].ratings[j].userId === userId) {
                const rate = { userId, rate: ratingPoint };
                products[i].ratings[j].rate = ratingPoint;
                found = true;
                break;
              }
            }
            if (!found) {
              products[i].ratings.push({ userId, rate: ratingPoint });
            }
          }
        }
      };
      rateProduct("hedfcg", "zwf8md", 4.5);
      rateProduct("aegfal", "ghderc", 5);
      console.log(products);
      
      