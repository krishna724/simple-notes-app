const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => {
    return "get notes.....";
}
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicatesNotes = notes.filter( note => note.title === title );
    if(duplicatesNotes.length === 0){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log("note added")
    }else{
        console.log("Note already teken");
    }

}
const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.bold.yellow.inverse('Your notes:'));
    notes.forEach(element => {
        console.log(element.title);
    });
}
const saveNotes = notes => {
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',notesJSON);
}
const loadNotes = () => {
    try{
        notesBuffer = fs.readFileSync('notes.json');
        notesBuffer.toString();
        return JSON.parse(notesBuffer);
    }catch(e){  
        return [];
    }
}
const removeNote = title => {
   const notes =  loadNotes();
   const newNoteList = notes.filter(  note => note.title !== title );
   if(newNoteList.length !== notes.length){
    saveNotes(newNoteList);
    console.log(chalk.green.inverse.bold("Note removed titled "+title));
   }
   else{
       console.log(chalk.red.inverse.bold("No notes found!"));
   }
}
const readNote = title => {
    const notes =  loadNotes();
    foundNote = notes.find((note)=> note.title === title);
    if(foundNote){
        console.log(chalk.bold.yellow.inverse(foundNote.title));
        console.log(foundNote.body);
    }else{
        console.log(chalk.red.bold('No note found'));
    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};