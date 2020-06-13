<template>
  <div class="pt70 pb70">
    <div class="container py-5">
      <div class="row">
        <div class="col-md-6 pr-md-4">
          <img
            style="border:none"
            class="img-fluid p-5 mb-1 card"
            src="@/assets/images/img_3.jpg"
            alt
          />
        </div>
        <!-- close col-md-6 -->
        <div class="col-md-6">
          <div class="row">
            <div class="col-6">
              <a class href>
                <img class="img-fluid card" src="@/assets/images/img_2.jpg" alt />
              </a>
            </div>
            <div class="col-6">
              <a class href>
                <img class="img-fluid card" src="@/assets/images/img_1.jpg" alt />
              </a>
            </div>
          </div>
          <div class="row pt-4">
            <div class="col-6">
              <ul class="list-group list-group-flush">
                <li class="list-group-item list-group-item-action bg-secondary text-white d-flex justify-content-between align-items-center">1 POUND
                     <span class="badge badge-pill">240$</span>
                </li>
                <li class="list-group-item list-group-item-action">2 POUND</li>
                <li class="list-group-item list-group-item-action">3 POUND</li>
              </ul>
            </div>
            <div class="col-6 text-center">
              <button class="btn btn-dark w-60 ">ADD TO CART</button>
            </div>
          </div>
        </div>
        <!-- close col-md-6 -->
      </div>
      <!-- close outer row  -->
    </div>
    <!--END .fh5co-projects-feed-->
  </div>
</template>

<style lang="scss" scoped>
.badge {
  font-size: 100%;
}

.borders {
  a {
    color: inherit;
  }
  position: relative;
  height: 2.4rem;
  width: 8.5rem;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  border-radius: 1px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  svg {
    transform: rotate(7deg);
    position: absolute;
    left: -1.25rem;
    top: -1px;
  }
  &:hover {
    fill: rgb(11, 223, 152);
    color: rgb(33, 218, 156);
    border-color: rgb(11, 223, 152);
  }
}
</style>
