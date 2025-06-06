/**Custom Type ---> */
var postsArr;
postsArr = [];
var post1;
post1 = {
    id: 1212,
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, distinctio!",
    content: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti illum eos, possimus sed qui aspernatur modi est magnam doloremque saepe.",
    react: 10,
    hide: false,
};
postsArr.push(post1);
var post2;
post2 = {
    id: 1213,
    title: "Consectetur ipsum dolor sit amet , adipisicing elit. Amet, distinctio!",
    content: "Adipisicing, ipsum dolor sit amet consectetur  elit. Deleniti illum eos, possimus sed qui aspernatur modi est magnam doloremque saepe.",
    react: 21,
    hide: true,
};
postsArr.push(post2);
function addPost(postType) {
    postsArr.push(postType);
}
addPost(post1);
addPost(post2);
addPost({
    id: 1213,
    title: "Distinctio Consectetur ipsum dolor sit amet , adipisicing elit. Amet, distinctio!",
    content: "Dolor sit amet consectetur  elit. Deleniti illum eos, possimus sed qui aspernatur modi est magnam doloremque saepAdipisicing, ipsum dolor sit amet consectetur  elit. Deleniti illum eos, possimus sed qui aspernatur modi est magnam doloremque saepe.",
    react: 21,
    hide: true,
});
console.log(postsArr.length);
