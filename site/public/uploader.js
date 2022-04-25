const readForm = (imageUpload, question, answers, first_hint, second_hint) => {
    const cloudinary = require("cloudinary-core");
    // console.log(`${imageUpload}\n${question}\n${answers}\n${first_hint}\n${second_hint}`);

    cloudinary.uploader
        .upload(imageUpload, {
            resource_type: "image",
        })
        .then((result) => {
            console.log("success", JSON.stringify(result, null, 2));
        })
        .catch((error) => {
            console.log("Error:", JSON.stringify(error, null, 2));
        })
}