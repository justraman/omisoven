<template>
  <header id="fh5co-header" role="banner">
    <div class="container text-center">
      <div id="fh5co-logo">
        <a href="index.html">
          <img src="../assets/logo.png" alt="omisoven logo" />
        </a>
      </div>
      <nav>
        <ul>
          <li class="active">
            <a href="about.html">Products</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="cart-btn">
      <img 
        style="width:50px;padding:10px" 
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAACz0lEQVR4nO2av2sUQRTHPxcSQaKVgoJdRFFsBAuNaGGjsTFFFGws/AcsLAx2VoJg8B8wdlqojY1a2AlCgmIRq+APkkhEjY2NiejF4lb3Odnb252d2d03tx8YmJ0b5r15+33v5riBhoaGhj6mZTzvBcaBAWO8DTwC5stwqkreAetd2tsK/fKG+abT2O3NiwoxU2APcB4YFmOTKfPVk2VD6znnq2Iw5/zJ3lNqxVfgCfCpyCLdiqKW9hO4RgH1Vr0BV+160uby1oAbGebXhRYwChyPnn8BB7A4y8goamMAeErs/5WkCSHTBh6L513mhNADAHBQ9K2+DTSnwBDwjdj/IzaLaA7AaWLfF0ko+qGnwDnRv4/lS9SqAFP+h20X0hqAMXrIH8JOASn/BxR4gRoVMASsULD6/0VjADLJH8JNAWfyB30KcCp/0BeAU8T+LtHjF2+IKeBU/qBLAYPAF2J/R10sqikAJ8khfwgvBZzLH/QowIv8QU8AcssfwkoBKf+HOHxhGhRgyv+oy8U1BEDK/yOOla0hAM+IfbzlevG6B+AisX9tYL9rA3UNwGbgKvCb2L/pvIsU/Xu825UanwwD++j85bVTjM8Bx4Dvrg2mKSDtSk2Z7QWww+WmJXUOwCJwifz3HP5RNAWSrtT45gfwGXgNvKRTA6zp+ysyWYqXjPAmX45URZYALIn+GV+OVEUWSU8Bl6P+GnCXcm6MLke22iXYSmU7sEA1Vf6C781lSYEV4AQw69mXJLyfPvNU9Rad09chPB46BG+Ae9QgBRpCxjYFAF4Bz3Gbp2XYsGKEThE0q/Rs9JkWG1b0+hpciObU3YY1U8KRVeB21FbF+E0FNqz5IJyYEONnxfh7BTasWRNObBHjW/n/rdXdRiJZToLLoj/WpS/n2FCGDWvM/JwG7uC3BviwYU2WCr1NgY1CjAAzbHRsBrfnAN82NtD3J8E/T4H499yPv2AAAAAASUVORK5CYII="
      />
    </div>
  </header>
</template>

<script>
export default {
  name: "header"
};
</script>

<style>

.cart-btn {
	position: fixed;
  right: 15px;
  cursor: pointer;
	bottom: 30px;
	background: white none repeat scroll 0% 0%;
	border-radius: 50%;
	z-index: 1000;
	width: 50px;
	box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.4);
}

</style>