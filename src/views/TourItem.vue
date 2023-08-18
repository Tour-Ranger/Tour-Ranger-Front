<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <h2 class="card-title">오늘의 Hot Deal</h2>
            <p class="card-text">3박 4일 일본여행 패키지 초특가 할인!</p>
            <img src="@/assets/banner.png" alt="Travel" class="img-fluid mb-3" />
          </div>
          <div class="col-md-6 mt-5 pt-5">
            <div class="mb-3 mt-5 pt-5">
              <p class="lead">원래가격: 50만원</p>
              <p class="lead">할인가: 100원</p>
              <label for="email" class="form-label">주문자 Email</label>
              <input type="email" class="form-control" id="email" placeholder="Enter your email" />
            </div>
            <button class="btn btn-primary">구매하기</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    purchase() {
      if (this.email) {
        alert(`Thank you for your purchase! We will send a confirmation to ${this.email}`);
      } else {
        alert("Please enter your email before purchasing.");
      }
    },
  },
};
</script>

<style scoped>
/* Add any custom styling here */
</style>
