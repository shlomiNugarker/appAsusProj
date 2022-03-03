import {storageService } from '../../../services/async-storage-service.js'
import { utilService } from '../../../services/util-service.js'

const MAIL_KEY = 'mail'

_createMails()

export const  mailService = {
    query,
    get,
    save,
    remove,
    getLoggedinUser
    
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

function _createMails() {
    let mails = utilService.loadFromStorage(MAIL_KEY);
    if (!mails || !mails.length) {
        
        mails = [{
            id: 'e101',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt : 1551133930594,
            to: 'momo@momo.com'
            },
            {
            id: 'e102',
            subject: 'Sprit 3',
            body: 'hello shlomi, how is it going?',
            isRead: false,
            sentAt : 1551133933394,
            to: 'momo@momo.com'
            },
            {
            id: 'e104',
            subject: 'Whats up!',
            body: 'hello shlomi, how is it going? hello shlomi, how is it going?',
            isRead: false,
            sentAt : 1555133933394,
            to: 'momo@momo.com'
            },
            {
                id: 'e105',
                subject: 'ok google!',
                body: 'google, how is it going?hello shlomi, how is it going? google, how is it going?hello shlomi, how is it going?',
                isRead: false,
                sentAt : 1555133933394,
                to: 'momo@momo.com'
            }      
            
            
        ]
        utilService.saveToStorage(MAIL_KEY, mails)
    }
    return mails
}