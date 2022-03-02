import {storageService } from '../../../services/async-storage-service.js'
import { utilService } from '../../../services/util-service.js'

const MAIL_KEY = 'mail'
export const  mailService = {
    query
}
function query(){
    return storageService.query(MAIL_KEY)
    .then(mails=>{
        if(mails.length) return mails
        else {
            return mails = [{
                id: 'e101',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt : 1551133930594,
                to: 'momo@momo.com'
                }
            ]
        }
    })
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

