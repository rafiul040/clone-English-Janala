const loadLessons = () => {
    //promise of response
    fetch("https://openapi.programming-hero.com/api/levels/all")
    // Promise of Json Data
    .then(res => res.json())

    .then(json => displayLesson(json.data))

}
const displayLesson = (lessons) => {
    // 1.Get The Container & Container Will Be Empty
    const levelContainer = document.getElementById('level-container');
    levelContainer.innerHTML = '';
    // 2.Get Into Every lessons
    for(let lesson of lessons){
    // 3.Create Element
    const btnDiv = document.createElement('div')
    btnDiv.innerHTML = `<button class="btn btn-outline btn-primary">
    <a href="" class=""><i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}</a>
    </button>`;
    // 4.Append Into Container
    levelContainer.append(btnDiv)
    }
}
loadLessons()
