<template>
  <div class="py-3 d-flex justify-content-center">
    <p class="mr-4 btn btn-danger" @click="home()">Home</p>
    <p class="btn btn-dark bg-dark" @click="login()" v-if="!tokenStatus">Login</p>
    <p class="btn btn-dark bg-dark" @click="logout()" v-if="tokenStatus">Logout</p>
  </div>
    <div>
        <main>
        <!-- Whats New Start -->
        <section class="pb-20 whats-news-area pt-50">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row d-flex justify-content-between">
                            <div class="col-lg-3 col-md-3">
                                <div class="section-tittle mb-30">
                                    <h3>Whats New</h3>
                                </div>
                            </div>
                            <div class="col-lg-9 col-md-9">
                                <div class="properties__button">
                                    <!--Nav Button  -->
                                    <nav>
                                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="details.htmlnav-home" role="tab" aria-controls="nav-home" @click="categorySearch('')" aria-selected="true">All</a
                        >
                        <a
                          class="nav-item nav-link"
                          id="nav-profile-tab"
                          data-toggle="tab"
                          href="details.htmlnav-profile"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                          v-for="(category, index) in categoryLists"
                          :key="index"
                          @click="categorySearch(category.title)"
                          >{{category.title}}</a
                        >
                      </div>
                    </nav>
                    <!--End Nav Button  -->
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                <div class="mb-5 d-flex justify-content-end">
                  <input type="text" name="" class="form-control col-3" v-model="searchKey" v-on:keyup.enter="search()">
                  <button class="bg-dark" @click="search()">Search</button>
                </div>
                  <!-- Nav Card -->
                  <div class="tab-content" id="nav-tabContent">
                    <!-- card one -->
                    <div
                      class="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div class="whats-news-caption">
                        

                        <span v-if="!tokenStatus" class="d-flex justify-content-center align-items-center" style="height: 300px;">
                        <h1 class="text-danger" >Please login to see the posts!</h1>
                        </span>
                        <span class="" v-else>
                          <div class="row">
                            <div class="mx-auto mt-3 d-flex align-items-center" style="height: 300px;" v-if="postLists.length == 0">
                              <h1 class="text-danger">No Posts Available!</h1>
                            </div>
                          
                            <div class="col-lg-6 col-md-6" v-for="(post, index) in postLists" :key="index" v-else>
                              <div class="single-what-news mb-100" @click="newsDetails(post.post_id)">
                                <div class="what-img">
                                  <img
                                    :src="post.image"
                                    alt=""
                                  />
                                </div>
                                <div class="what-cap">
                                  <span class="color1">{{ post.title }}</span>
                                  <h4>
                                    <a href="details.html"
                                      >{{ post.description }}</a
                                    >
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </span>
                          
                        
                      </div>
                    </div>
                  </div>
                  <!-- End Nav Card -->
                </div>
              </div>
                </div>
            </div>
            </div>
           
        </section>
        <!-- Whats New End -->

        <!--Start pagination -->
        <div class="text-center pagination-area pb-45">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="single-wrap d-flex justify-content-center">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-start">
                                    <li class="page-item">
                                        <a class="page-link" href="details.html"><span class="flaticon-arrow roted"></span
                      ></a>
                                            </li>
                                            <li class="page-item active">
                                                <a class="page-link" href="details.html">01</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="details.html">02</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="details.html">03</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="details.html"><span class="flaticon-arrow right-arrow"></span
                      ></a>
                                            </li>
                                            </ul>
                                    </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End pagination  -->
    </main>
    </div>
</template>
<script src="../js/homePage.js"></script>
