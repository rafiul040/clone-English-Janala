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
    .then((data) => {
        const clickBtn = document.getElementById(`lesson-btn-${id}`)
        clickBtn.classList.add("active")
        displayLevelWord(data.data)
    })
}


const displayLevelWord = (words) => {
    const wordContainer = document.getElementById('word-container')
    wordContainer.innerHTML = "";
    if(words.length == 0){
        wordContainer.innerHTML =`
        <div class="text-center col-span-full rounded-xl py-10 space-y-6 font-bangla">
        <img class="mx-auto" src="./assets/alert-error.png"/>
        <p class="text-xl font-medium text-gray-400">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <h2 class="font-bold text-4xl">নেক্সট Lesson এ যান</h2>
    </div>
        `;
        return
    }
    // {
    //     "id": 82,
    //     "level": 1,
    //     "word": "Car",
    //     "meaning": "গাড়ি",
    //     "pronounciation": "কার"
    // }
    // Use ForEach
    words.forEach((word) => {
        const card = document.createElement('div')
        card.innerHTML = `
         <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
        <h2 class="font-bold text-2xl">${word.word ? word.word : "শব্দ পাওয়া যায়নি "}</h2>
        <p class="font-semibold">Meaning / Pronounciation</p>
        <div class="text-2xl font-medium font-bangla">${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি "} / ${word.pronounciation ? word.pronounciation : "Pronounciation পাওয়া যায়নি "}</div>
        <div class="flex justify-between items-center">
            <button class="btn bg-[#1a91ff10] hover:bg-[#1a91ff80]"><i class="fa-solid fa-circle-info"></i></button>
            <button class="btn bg-[#1a91ff10] hover:bg-[#1a91ff80]"><i class="fa-solid fa-volume-high"></i></i></button>
        </div>
    </div>
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
    btnDiv.innerHTML = `<button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn">
    <a href="" class=""><i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}</a>
    </button>`;
    // 4.Append Into Container
    levelContainer.append(btnDiv)
    }
}
loadLessons()
