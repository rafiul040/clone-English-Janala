const loadLessons = () => {
    //promise of response
    fetch("https://openapi.programming-hero.com/api/levels/all")
    // Promise of Json Data
    .then(res => res.json())

    .then(json => displayLesson(json.data))

}
const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayLevelWord(data.data))
}


const displayLevelWord = (words) => {
    const wordContainer = document.getElementById('word-container')
    // wordContainer.innerHTML = "";

    words.forEach((word) => {
        const card = document.createElement('div')
        card.innerHTML = `
        <p> Cat </p>
        `;
        wordContainer.append(card)
    })
}


const displayLesson = (lessons) => {
    // 1.Get The Container & Container Will Be Empty
    const levelContainer = document.getElementById('level-container');
    levelContainer.innerHTML = '';
    // 2.Get Into Every lessons
    for(let lesson of lessons){
    // 3.Create Element
    const btnDiv = document.createElement('div')
    btnDiv.innerHTML = `<button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
    <a href="" class=""><i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}</a>
    </button>`;
    // 4.Append Into Container
    levelContainer.append(btnDiv)
    }
}
loadLessons()
