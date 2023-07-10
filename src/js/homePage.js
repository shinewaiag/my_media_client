import axios from "axios";
import {mapGetters} from "vuex";
export default {
    name: "HomePage",
    data() {
        return {
            postLists: [],
            categoryLists: [],
            searchKey: "",
            tokenStatus: false,
        };
    },
    computed: {
        ...mapGetters(["storageToken"]),
    },
    methods: { 
        getAllPosts () {
            axios.get("http://127.0.0.1:8000/api/posts")
                        .then((response) => {
                            // this.postLists = response.data.post;
                            // console.log(this.postLists);
                            for(let i = 0; i < response.data.post.length; i++) {
                                if(response.data.post[i].image != null) {
                                    response.data.post[i].image = "http://localhost:8000/postImage/"+response.data.post[i].image;
                                } else {
                                    response.data.post[i].image = "http://localhost:8000/default/default.png";
                                }
                            }
                            this.postLists = response.data.post;
                        });
                        
            
        },
        getCategory() {
            axios.get("http://localhost:8000/api/categories").then((response) => {
               this.categoryLists = response.data.categories;
            });
        },
        search() {
            let searchKey = { 
                key: this.searchKey,
            };
            axios.post("http://localhost:8000/api/posts/search", searchKey).then((response) => {
                for(let i=0; i< response.data.searchData.length; i++) {
                    if(response.data.searchData[i].image != null) {
                        response.data.searchData[i].image = "http://localhost:8000/postImage/"+response.data.searchData[i].image;
                    } else {
                        response.data.searchData[i].image = "http://localhost:8000/default/default.png";
                    }
                }
                this.postLists = response.data.searchData;
            });
        },
        newsDetails(id) {
            if (id) {
                this.$router.push({
                    name: 'newsDetails',
                    params: {
                        newsId: id
                    },
                });
            } else {
                console.warn('Invalid id:', id);
            }
        },
        home() {
            this.$router.push({
                name: 'home',
            });
        },
        login() {
            this.$router.push({
                name: 'loginPage',
            });
        },
        logout() {
            this.$store.dispatch("setToken", null);
            this.login();
        },

        categorySearch(searchKey) {
            let search = { key: searchKey };
            axios.post("http://localhost:8000/api/categories/search", search).then((response) => {
                for(let i=0; i< response.data.searchData.length; i++) {
                    if(response.data.searchData[i].image != null) {
                        response.data.searchData[i].image = "http://localhost:8000/postImage/"+response.data.searchData[i].image;
                    } else {
                        response.data.searchData[i].image = "http://localhost:8000/default/default.png";
                    }
                }
                this.postLists = response.data.searchData;
            });
        },
        checkToken() {
            if(this.storageToken != null && this.storageToken != undefined && this.storageToken != "") {
                this.tokenStatus = true
            } else {
                this.tokenStatus = false
            }
        }
        
        
    },
    mounted() {
        this.checkToken();
        this.getAllPosts();
        this.getCategory();
    }
}