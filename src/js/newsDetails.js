import {mapGetters} from 'vuex';
import axios from 'axios';
export default {
    name: 'NewsDetails',
    data() {
        return {
            postId: 0,
            posts: {},
            viewCount: 0,
        }
    },
    computed: {
        ...mapGetters(["storageToken", "storageUserData"]),
    },
    methods: {
        loadPost (id) {
            let post = { 
                postId: id,
            };
            axios.post("http://localhost:8000/api/posts/details", post).then((response) => {
                    if(response.data.post.image != null) {
                        response.data.post.image = "http://localhost:8000/postImage/"+response.data.post.image;
                    } else {
                        response.data.post.image = "http://localhost:8000/default/default.png";
                    }
                this.posts = response.data.post;
            });
        },
        back() {
            history.back();
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
    },
    mounted() {
        let data = {
            userId: this.storageUserData.id,
            postId: this.$route.params.newsId,
        }
       axios.post("http://localhost:8000/api/post/actionLog", data).then(response => {
        this.viewCount = response.data.post.length
       }); 
       this.postId = this.$route.params.newsId;
       this.loadPost(this.postId);
    },
}