<template>
  <div class="container-fluid pt70 pb70">
    <div id="fh5co-projects-feed" class="fh5co-projects-feed clearfix masonry">
      <div :key="i" v-for="i in [1,2,3,4,5,6,7]" class="fh5co-project masonry-brick">
        <a href="single.html">
          <img src="@/assets/images/img_20.jpg" alt="Free HTML5 by FreeHTML5.co" />
          <h2>Banana Cake <span>ADD</span></h2>
        </a>
      </div>
    </div>
    <!--END .fh5co-projects-feed-->
  </div>
</template>