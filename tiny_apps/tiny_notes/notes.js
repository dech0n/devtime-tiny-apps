// TODO: Add DELETE button / functionality to each note
// TODO: Add some styles

let notes = []

const generateNotes = () => {
    const localStorage = window.localStorage // localStorage is an object
    const display = document.getElementById('display')
    const options = document.getElementById('options')
    // const allNotes = document.createElement('ul')
    // display.append(allNotes)

    const notebook = document.createElement('div');
    notebook.id = 'notebook';
    notebook.style.width = '500px';
    notebook.style.height = '500px';
    notebook.style.border = `4px solid ${appList[0].color}`
    display.append(notebook)

    const renderNotes = () => {
        const saved = localStorage.getItem('notes')
        if (saved) {
            let savedNotes = JSON.parse(saved);
            savedNotes.forEach(note => {
                let formattedNote = formatNote(note)
                notebook.append(formattedNote)
            })
        }
    }

    const formatNote = note => {
        let formattedNote = document.createElement('div')
        formattedNote.id = note.id
        formattedNote.innerHTML = note.text
        formattedNote.className = 'note'
        return formattedNote
    }

    const addNote = text => {
        const note = {
            text: text,
            id: Date.now()
        }
        notes.push(note)
        //TODO: make notes persist between renders
        //! every time we refresh, notes array is reset to empty and then saved into localStorage ()
        localStorage.setItem('notes', JSON.stringify(notes)) // can't send an array, gotta change it to JSON
        const formattedNote = formatNote(note)
        notebook.append(formattedNote)
        renderNotes()
    }

    const form = document.createElement('form')
    const input = document.createElement('input')
    input.type = 'text'
    input.placeholder = 'Your note here...'
    const button = document.createElement('button')
    button.type = 'submit'
    button.innerHTML = 'Submit'

    form.append(input)
    form.append(button)

    form.addEventListener('submit', e => {
        e.preventDefault()

        const text = input.value.trim(); // trim() removes trailing spaces
        addNote(text)
        input.value = ''
    })

    // notes.forEach(note => {
    //     const li = document.createElement('li')
    //     const node = document.createTextNode(note)
    //     li.appendChild(node)
    //     allNotes.append(li)
    // })

    options.append(form)
}
