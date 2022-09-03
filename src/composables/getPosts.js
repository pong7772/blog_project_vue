import { ref } from "vue";
const getPosts = () => {
    const post = ref([]);
    const err = ref("");

    const load = async () => {
        try {
            let data = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (!data.ok) {
                throw Error("No Data Avialable");
            }
            // console.log(await data.json());
            post.value = await data.json();
        } catch (errr) {
            err.value = errr.message;
            console.log(err.value);
        }
    };

    return { post, err, load }
}

export default getPosts;