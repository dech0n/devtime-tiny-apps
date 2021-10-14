let notes = ['a note!', 'another note.', 'more note...']

const generateNotes = () => {
    const display = document.getElementById('display')
    const options = document.getElementById('options')
    const allNotes = document.createElement('ul')
    display.append(allNotes)

    const notebook = document.createElement('div');
    notebook.id = 'notebook';
    notebook.style.width = '500px';
    notebook.style.height = '500px';
    notebook.style.border = `4px solid ${appList[0].color}`
    display.append(notebook)

    const formatNote = note => {
        let formattedNote = document.createElement('div')
        formattedNote.id = note.id
        formattedNote.innerHTML = note.text
        formattedNote.className = 'note'
    }

    const addNote = text => {
        const note = {
            text: text,
            id: Date.now()
        }

        notes.push(note.text)
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
        alert(text)
        input.value = ''
    })

    // notes.forEach(note => {
    //     const li = document.createElement('li')
    //     const node = document.createTextNode(note)
    //     li.appendChild(node)
    //     allNotes.append(li)
    // })

    display.append(form)
}
