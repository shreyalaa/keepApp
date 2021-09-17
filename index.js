const addButton = document.querySelector(".addNote")

//storing data to local storage
const storingData = () =>{
    const texts = document.querySelectorAll("textarea")
    const notes = []
    console.log(texts)
    texts.forEach((ele)=>{
        notes.push(ele.value)
    })
    localStorage.setItem("texts" , JSON.stringify(notes))
}




const addNewNote = (text ="") =>{
    const note = document.createElement("div")
    note.classList.add("note")

    const htmlData = `
    <div class = "operation">
    <button class  = "edit"><i class="fas fa-edit"></i></button>
    <button class = "delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class = "main ${text? "":"hidden"}"></div>
    <textarea class = "${text? "hidden":""}"></textarea> `

    note.insertAdjacentHTML('afterbegin',htmlData)
    document.body.appendChild(note)

    const delButton = note.querySelector(".delete")
    const editButton = note.querySelector(".edit")
    const textArea = note.querySelector("textarea")
    const main = note.querySelector(".main")

    textArea.value = text
    main.value = text

    delButton.addEventListener('click' , ()=>{
        note.remove()

    })

    editButton.addEventListener('click' ,()=>{
        main.classList.toggle("hidden")
        textArea.classList.toggle("hidden")
    })

    textArea.addEventListener('change' , (e)=>{
        const value = e.target.value
        main.innerHTML = value
        storingData()
    })

    
}

addButton.addEventListener('click' , ()=>{
    addNewNote()
})

