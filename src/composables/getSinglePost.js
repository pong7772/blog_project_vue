import { ref } from "vue";

const getSignlePost = (id) => {
    let post = ref({})
    const handleData = async () => {
        try {
            const data = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
            if (!data.ok) {
                throw Error("cant get data")
            }
            post.value = await data.json();
            console.log(post.value);
        }
        catch (err) {
            console.log(err.message)
        }
    }

    // const newPost = post.value.filter((single) => single.id = id)
    return { post, handleData };

}
export default getSignlePost;