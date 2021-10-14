let notes = ['a note!', 'another note.', 'more note...']

const generateNotes = () => {
    const display = document.getElementById('display')
    const options = document.getElementById('options')
    const allNotes = document.createElement('ul')
    display.append(allNotes)

    const notebook = document.createElement('div');
    notebook.id = 'notebook';
    notebook.width = '500';
    notebook.height = '500';
    notebook.style.border = `4px solid ${appList[0].color}`
    display.append(notebook)

    const form = document.createElement('form')
    const input = document.createElement('input')
    const button = document.createElement('button')

    notes.forEach(note => {
        const li = document.createElement('li')
        const node = document.createTextNode(note)
        li.appendChild(node)
        allNotes.append(li)
    })


    const input = document.createElement('input')
    input.type = 'text'
    options.append(input)

    const submit = document.createElement('button')
    submit.type = 'submit'
    options.append(form)
}
