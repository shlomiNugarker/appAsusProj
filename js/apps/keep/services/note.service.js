'use strict';
import { storageService } from '../../../services/async-storage-service.js'

const STORAGE_KEY = 'notesDB'
export const noteService = {
    query,
    saveNote,
    getEmptyNote,
    getNote,
    remove,
}

function query() {
    return storageService.query(STORAGE_KEY)
        .then(notes => {
            if (notes.length) return notes

            else {

                notes = [
                    {
                        id: 'n101',
                        type: 'note-txt',
                        isPinned: true,
                        info: {
                            txt: 'Fullstack Me Baby!'
                        },
                        style: {
                            backgroundColor: "#00d"
                        }

                    },
                    {
                        id: 'n102',
                        type: 'note-img',
                        info: {
                            url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQEg4REBAWEBEQFg0SEBATDQ8WFw0WFhIWGxkRExMaHDQsGRslGxUVIjEhJTUrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGy4gIB8tLSstLS0uLSstLSsrLS0rLi0tKy0tLSstLS0rLS8tLS0tLS0rLS0tKy0tLS0tLTctLf/AABEIAMgAyAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQEDCAL/xABHEAABAwIDAwgFCQYDCQAAAAABAAIDBBEFEiEGEzEHIkFRYXGBkTJykqHRFEJSU2KCscHhIzNDVJOiCBZEJCVzg6OywvDx/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAQFBgMCAQf/xAA5EQABAwIBCgQFAgUFAAAAAAABAAIDBBEhBRIxQVFxgZGhwTJhsdETIkLh8BRSBiMzwvEVJEOi0v/aAAwDAQACEQMRAD8AvFERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERF1veGgkkADiSQAO8rQ41tjRUkAqZahroS8xB8V5AXgE5OZ02B4oikSKJbK7fUeJMnkgeWbgOdKyQNa9rB/Fygm7e3oVUYLyvVlRiNIJXtipHzBjomRN1ZIS0F7jc6XB0siL0AXgEAkAm9hca9y7F5urKyTDdpQZZXuY2oFi+RzssNQOAJPANk/tXpFERERERERERERERF585Vsdq5cZZTUEsrZYWQwMbDK5hfI4F5B119Jo1+iuiPlHx3DSG10Bka3T/aaVzb90rLX79UReikVbQ8rEEVLh9RXQvhdXCoc1kREm6ZG/KHuvY2d0WupHg23eHVlhBWxFx4Me7dv7sj7HyRFJkXyDfVfSIiIiIiIiIi0mP7T0lCAaupZCSC5rHOu94B4tYNT4Ldqm/8AEbhGeno6sDWGR0Lzp6MguL9xZ/ciKd7Z7WDD6IVzIjUxkw2DXhoyyDmvJtw1b7SgOJcoNfWYUytoGiKcVLqaaKKLeua1zbsLQQddW9HSq8G1+KV1IzDomGWBkccRZDSl7pGstbO6xOmUcLKW/wCHLFsk9bSONhKxkzB9qM5XAd4ePZRFX2PV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RERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERF/9k=', title: 'Bobi and Me'
                        },
                        style: {
                            backgroundColor: '#00d'
                        }
                    },
                    {
                        id: 'n103',
                        type: 'note-img',
                        info: {
                            url: 'https://www.w3schools.com/css/img_lights.jpg',
                            title: 'Bobi and Me'
                        },
                        style: {
                            backgroundColor: '#00d'
                        }
                    },
                    {
                        id: 'n104',
                        type: 'note-todos',
                        info: {
                            label: 'Get my stuff together',
                            todos: [
                                { txt: 'Driving liscence', doneAt: null },
                                { txt: 'Coding power', doneAt: 187111111 }
                            ]
                        },
                        style: {
                            backgroundColor: "#00d"
                        }

                    }
                ];
                storageService.saveToSTorage(STORAGE_KEY, notes)
                return notes

            }

        })
}

function getEmptyNote(notetype) {

    if (notetype === 'note-txt') {
        return {
            type: 'note-txt',
            isPinned: false,
            info: {
                txt: ''
            },
            style: {
                backgroundColor: '#00d'
            }
        }
    } else if (notetype === 'note-img') {
        return {
            type: 'note-img',
            info: {
                url: '',
                title: 'Title'
            },
            style: {
                backgroundColor: '#00d'
            }

        }
    }
    else if (notetype === 'note-video')
        return {

            type: 'note-video',
            info: {
                url: '',
                title: 'Title'
            },
            style: {
                backgroundColor: '#00d'
            }

        }
    else if (notetype === 'note-todos') {

        return {

            type: 'note-todos',
            info: {
                label: 'Todo',
                todos: []
            },
            style: {
                backgroundColor: '#00d'
            }
        }
    }
}

function getNote(id) {
    return storageService.get(STORAGE_KEY, id)
}

function saveNote(note) {
    if (note.id) return storageService.put(STORAGE_KEY, note);
    return storageService.post(STORAGE_KEY, note);
}

function remove(id) {
    return storageService.remove(STORAGE_KEY, id)
}

