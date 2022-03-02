'use strict';
import { storageService } from '../../../services/async-storage-service.js'

const STORAGE_KEY = 'notesDB'
export const noteService = {
    query,
    saveNote,
    getNoteType
}

function query() {
    return storageService.query(STORAGE_KEY)
        .then(notes => {
            if (notes.length) return notes

            else {

                notes = [
                    {
                        id: "n101",
                        type: "note-txt",
                        isPinned: true,
                        info: {
                            txt: "Fullstack Me Baby!"
                        }
                    },
                    {
                        id: "n102",
                        type: "note-img",
                        info: {
                            url: "http://some-img/me",
                            title: "Bobi and Me"
                        },
                        style: {
                            backgroundColor: "#00d"
                        }
                    },
                    {
                        id: "n103",
                        type: "note-todos",
                        info: {
                            label: "Get my stuff together",
                            todos: [
                                { txt: "Driving liscence", doneAt: null },
                                { txt: "Coding power", doneAt: 187111111 }
                            ]
                        }
                    }
                ];
                storageService.saveToSTorage(STORAGE_KEY, notes)
                return notes

            }

        })
}

function getNoteType(notetype) {

    if (notetype === 'txt') {
        return {
            type: "note-txt",
            isPinned: false,
            info: {
                txt: ''
            }
        }
    } else if (notetype === 'img') {
        return {
            type: "note-img",
            info: {
                url: '',
                title: 'Title'
            },
            style: {
                backgroundColor: "#00d"
            }

        }
    }
    else if (notetype === 'video')
        return {

            type: "note-img",
            info: {
                url: '',
                title: 'Title'
            },
            style: {
                backgroundColor: "#00d"
            }

        }
    else if (notetype === 'todo') {

        return {

            type: "note-todos",
            info: {
                label: 'Todo',
                todos: []
            }
        }
    }
}

function saveNote(note) {
    return storageService.post(STORAGE_KEY, note)
        .then(note => note)
}