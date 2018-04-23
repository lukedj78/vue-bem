<template>
  <section class="banner clearfix">
		<div class="banner__image"></div>
		<div class="banner__copy">
			<div class="banner__copy__text">
				<h3>Banner Title</h3>
				<h4>Banner Subtitle</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas autem quam, explicabo pariatur sit nisi, adipisci saepe.</p>
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
Banner
-----------------------------*/
.banner{background: #fff; height:50%;margin-top:40px}
.banner__image{width:30%; float:left;height:100%;
	background-image: url("https://source.unsplash.com/category/nature/400x400");
	background-size: cover;
	-o-background-size: cover;
	-moz-background-size: cover;
	background-position: center center;
}
.banner__copy{width:70%; float:left;height:100%;display: table;}
.banner__copy__text{display: table-cell; vertical-align: middle;padding:30px;}

.banner__copy__text h3{font-size: 36px;margin-bottom:0;}
.banner__copy__text h4{font-size: 22px;margin: 5px 0}

/*-----------------------------
Tablet
-----------------------------*/
@media (max-width: 998px){
	/* banner */
	.banner__image,
	.banner__copy{width:50%;height:100%}

}

/*-----------------------------
Smartphone
-----------------------------*/
@media (max-width: 767px){
	/* Banner */
	.banner{height: 600px;}
	.banner__image,
	.banner__copy{width:100%;height:50%}
}
</style>
