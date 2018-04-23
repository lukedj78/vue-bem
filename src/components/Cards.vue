<template>
  <section class="cards clearfix">
    <div class="card">
      <img class="card__image" src="https://source.unsplash.com/category/nature/400x260" alt="Nature">
      <div class="card__copy">
        <h3>Title Card</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis sequi incidunt optio, asperiores dolorum ratione excepturi. </p>
      </div>
    </div>
    <div class="card">
      <img class="card__image" src="https://source.unsplash.com/category/food/400x260" alt="Nature">
      <div class="card__copy">
        <h3>Title Card</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis sequi incidunt optio, asperiores dolorum ratione excepturi. </p>
      </div>
    </div>
    <div class="card">
      <img class="card__image" src="https://source.unsplash.com/category/people/400x260" alt="Nature">
      <div class="card__copy">
        <h3>Title Card</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis sequi incidunt optio, asperiores dolorum ratione excepturi. </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped>

/*-----------------------------
Cards
-----------------------------*/
.cards{max-width: 1200px; margin: 40px auto}
.card{width: 30%; margin:0 1.5%; background: #fff;float:left;}
.card__image{width:100%; height: auto;}
.card__copy{padding:5px 20px;}
.card__copy h3{margin-bottom:0}

/*-----------------------------
Tablet
-----------------------------*/
@media (max-width: 998px){}

  /*-----------------------------
  Smartphone
  -----------------------------*/
  @media (max-width: 767px){
    /* Cards */
    .card{width: 90%; margin:5%; }
  }

  </style>
