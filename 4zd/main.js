var b = 1
function nextImage(){
    let a = ["photo/photo_2024-05-30_01-18-16 (2).jpg", "photo/photo_2024-05-30_01-18-16.jpg","photo/photo_2024-05-19_20-28-07.jpg"]

    let img = document.getElementById("galleryImage")
    b=b+1
    if (b>a.length-1){
        b=0
    }
    img.setAttribute("src",a[b])
    console.log(b)

}
function prevImage(){
    let a = ["photo/photo_2024-05-30_01-18-16 (2).jpg", "photo/photo_2024-05-30_01-18-16.jpg","photo/photo_2024-05-19_20-28-07.jpg"]

    let img = document.getElementById("galleryImage")
    b=b-1
    if(b<0){
        b=2
    }
    img.setAttribute("src",a[b])
    console.log(b)
}
