const form = document.getElementById("form");

form.addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    const name = document.getElementById("question");
    const answers = document.getElementById("answers");
    const firstHint = document.getElementById("firstHint");
    const secondHint = document.getElementById("secondHint");
    const formData = new FormData();
    formData.append("name", name.value);
    formData.append("answers", answers.value);
    formData.append("firstHint", firstHint.value);
    formData.append("secondHint", secondHint.value);

    for (let i = 0; i < files.files.length; i++) {
        formData.append("files", files.files[i]);
    }
    fetch("http://localhost:3000/uploads", {
        method: 'POST',
        body: formData,
        // headers: {
        //     "Content-Type": "multipart/form-data"
        // }
    })
        .then((res) => console.log(res))
        .catch((err) => ("Error occured", err));
}