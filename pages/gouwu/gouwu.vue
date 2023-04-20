<template>
  <div class="cart">
    <div class="cart-header">购物车</div>
    <div class="cart-list">
      <div class="cart-item" v-for="(item, index) in cartItems" :key="index">
        <div class="cart-item-img">
          <img :src="item.imgUrl" alt="" />
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">{{ item.name }}</div>
          <div class="cart-item-price">￥{{ item.price }}</div>
        </div>
        <div class="cart-item-quantity">
          <div class="cart-item-quantity-btn" @click="decrement(index)">-</div>
          <div class="cart-item-quantity-value">{{ item.quantity }}</div>
          <div class="cart-item-quantity-btn" @click="increment(index)">+</div>
        </div>
        <div class="cart-item-remove" @click="removeItem(index)">x</div>
      </div>
      <div class="cart-empty" v-if="cartItems.length === 0">
        购物车是空的，快去选购吧！
      </div>
    </div>
    <div class="cart-footer">
      <div class="cart-total-price">总价：￥{{ total }}</div>
      <div class="cart-checkout" @click="checkout">结算</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [
        {
          imgUrl: 'https://picsum.photos/id/0/200/200',
          name: '商品1',
          price: 19.99,
          quantity: 1
        },
        {
          imgUrl: 'https://picsum.photos/id/10/200/200',
          name: '商品2',
          price: 29.99,
          quantity: 2
        }
      ]
    }
  },
  computed: {
    total() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    }
  },
  methods: {
    increment(index) {
      this.cartItems[index].quantity++
    },
    decrement(index) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--
      }
    },
    removeItem(index) {
      this.cartItems.splice(index, 1)
    },
    checkout() {
      // 结算操作
    }
  }
}
</script>

<style scoped>
.cart {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px;
}

.cart-header {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.cart-list {
  flex: 1;
  overflow: auto;
  margin-bottom: 10px;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.cart-item-img {
  width: 80px;
  height: 80px;
  overflow: hidden;
  margin-right: 10px;
}

.cart-item-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cart-item-info {
  flex: 1;
  margin-right: 10px;
}

.cart-item-name {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

.cart-item-price {
  font-size: 14px;
  color: #999;
}

.cart-item-quantity {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.cart-item-quantity-btn {
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
}

.cart-item-quantity-value {
  width: 30px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  margin: 0 10px;
  font-size: 14px;
}

.cart-item-remove {
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 14px;
  color: #999;
  cursor: pointer;
}

.cart-empty {
  text-align: center;
  font-size: 16px;
  color: #999;
  margin-top: 50px;
}

.cart-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-top: 1px solid #ccc;
  padding: 0 10px;
}

.cart-total-price {
  font-size: 16px;
  font-weight: bold;
}

.cart-checkout {
  width: 100px;
  height: 40px;
  background-color: #f00;
  color: #fff;
  text-align: center;
  line-height: 40px;
  border-radius: 5px;
  cursor: pointer;
}
</style>