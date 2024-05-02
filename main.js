const app = Vue.createApp({
  data () {
    return {
      product: 'Socks',
      image: './assets/images/socks_blue.jpg',
      inStock: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      sizes: ['Small', 'Medium', 'Large'],
      variants: [
        {id: 1111, color: 'green'},
        {id: 1112, color: 'blue'}
      ]
    }
  }
})
