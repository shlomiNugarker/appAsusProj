import {storageService } from '../../../services/async-storage-service.js'
import { utilService } from '../../../services/util-service.js'

const MAIL_KEY = 'mail'

_createMails()

export const  mailService = {
    query,
    get,
    save,
    remove,
    getLoggedinUser,
    post
}

function query(){
    return storageService.query(MAIL_KEY)
}

function remove(mailId) {
    return storageService.remove(MAIL_KEY, mailId)
}

function get(mailId) {
    return storageService.get(MAIL_KEY, mailId)
}

function save(mail) {
    if (mail.id) return storageService.put( MAIL_KEY, mail);
    else return storageService.post(MAIL_KEY, mail)
}

function getLoggedinUser(){
    return  {
        email: 'user@appsus.com',
        fullname: 'Mahatma Appsus'
    }
}

function post(mail){
    storageService.post( MAIL_KEY, mail)
}

function _createMails() {
    let mails = utilService.loadFromStorage(MAIL_KEY);
    if (!mails || !mails.length) {
        
        mails = [{
            id: 'e101',
            subject: 'mail1 in inbox folder',
            body: 'hey, im from inbox',
            isRead: false,
            isStared: true,
            sentAt : 1451133930594,
            to: 'momo@momo.com',
            status: 'inbox'
            },
            {
            id: 'e102',
            subject: 'a mail in trash folder',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque quis vel reiciendis ipsam repellat officiis animi assumenda. Officia distinctio quidem recusandae. Ad porro laborum quas possimus vero consequatur temporibus modi?',
            isRead: false,
            isStared: false,
            sentAt : 1551133933394,
            to: 'momo@momo.com',
            status: 'trash'
            },
            {
            id: 'e103',
            subject: 'b mail in trash folder',
            body: 'hello  whats up shlomi, im from trash folder Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque quis vel reiciendis ipsam repellat officiis animi assumenda. Officia distinctio quidem recusandae. Ad porro laborum quas possimus vero consequatur temporibus modi?',
            isRead: false,
            isStared: false,
            sentAt : 1351133933394,
            to: 'momo@momo.com',
            status: 'trash'
            },
            {
            id: 'e104',
            subject: 'f mail in sent folder',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque quis vel reiciendis ipsam repellat officiis animi assumenda. Officia distinctio quidem recusandae. Ad porro laborum quas possimus vero consequatur temporibus modi?',
            isRead: false,
            isStared: false,
            sentAt : 1555133933394,
            to: 'sombodyelse@momo.com',
            status: 'sent'
            },
            {
            id: 'e105',
            subject: 'mail2 in inbox folder',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque quis vel reiciendis ipsam repellat officiis animi assumenda. Officia distinctio quidem recusandae. Ad porro laborum quas possimus vero consequatur temporibus modi?',
            isRead: false,
            isStared: false,
            sentAt : 1552133933394,
            to: 'momo@momo.com',
            status: 'inbox'
            },
            {
            id: 'e106',
            subject: 'ba mail in inbox folder',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque quis vel reiciendis ipsam repellat officiis animi assumenda. Officia distinctio quidem recusandae. Ad porro laborum quas possimus vero consequatur temporibus modi?',
            isRead: false,
            isStared: false,
            sentAt : 1551133933394,
            to: 'momo@momo.com',
            status: 'inbox'
            },
            {
            id: 'e107',
            subject: 'mail in inbox folder',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque quis vel reiciendis ipsam repellat officiis animi assumenda. Officia distinctio quidem recusandae. Ad porro laborum quas possimus vero consequatur temporibus modi?',
            isRead: false,
            isStared: false,
            sentAt : 1555133983394,
            to: 'sombodyelse@momo.com',
            status: 'inbox'
            },
            {
            id: 'e108',
            subject: 'mail2 in inbox folder',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque quis vel reiciendis ipsam repellat officiis animi assumenda. Officia distinctio quidem recusandae. Ad porro laborum quas possimus vero consequatur temporibus modi?',
            isRead: false,
            isStared: false,
            sentAt : 1555163933394,
            to: 'momo@momo.com',
            status: 'inbox'
            },      
            {
            id: 'e109',
            subject: 'mail in inbox folder',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque quis vel reiciendis ipsam repellat officiis animi assumenda. Officia distinctio quidem recusandae. Ad porro laborum quas possimus vero consequatur temporibus modi?',
            isRead: false,
            isStared: false,
            sentAt : 1551133973394,
            to: 'momo@momo.com',
            status: 'inbox'
            },
            {
            id: 'e1010',
            subject: 'mail in inbox folder',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque quis vel reiciendis ipsam repellat officiis animi assumenda. Officia distinctio quidem recusandae. Ad porro laborum quas possimus vero consequatur temporibus modi?',
            isRead: false,
            isStared: false,
            sentAt : 1555133983394,
            to: 'sombodyelse@momo.com',
            status: 'inbox'
            },
            {
            id: 'e1011',
            subject: 'mail2 in inbox folder',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque quis vel reiciendis ipsam repellat officiis animi assumenda. Officia distinctio quidem recusandae. Ad porro laborum quas possimus vero consequatur temporibus modi?',
            isRead: false,
            isStared: false,
            sentAt : 1555173933394,
            to: 'momo@momo.com',
            status: 'inbox'
            },      
            {
            id: 'e1012',
            subject: 'mail in inbox folder',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque quis vel reiciendis ipsam repellat officiis animi assumenda. Officia distinctio quidem recusandae. Ad porro laborum quas possimus vero consequatur temporibus modi?',
            isRead: false,
            isStared: false,
            sentAt : 1551133973394,
            to: 'momo@momo.com',
            status: 'inbox'
            },
            {
            id: 'e1013',
            subject: 'mail2 in inbox folder',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque quis vel reiciendis ipsam repellat officiis animi assumenda. Officia distinctio quidem recusandae. Ad porro laborum quas possimus vero consequatur temporibus modi?',
            isRead: false,
            isStared: false,
            sentAt : 1555173933394,
            to: 'momo@momo.com',
            status: 'inbox'
            },      
            {
            id: 'e1014',
            subject: 'mail in inbox folder',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque quis vel reiciendis ipsam repellat officiis animi assumenda. Officia distinctio quidem recusandae. Ad porro laborum quas possimus vero consequatur temporibus modi?',
            isRead: false,
            isStared: false,
            sentAt : 1551133973394,
            to: 'momo@momo.com',
            status: 'inbox'
            },
            
        ]
        utilService.saveToStorage(MAIL_KEY, mails)
    }
    return mails
}