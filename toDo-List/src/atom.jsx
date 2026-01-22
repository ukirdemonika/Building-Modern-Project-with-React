import { atom } from "recoil"
export const todos=atom({
    key:"todos",
    default:[
        {
            text:'recoil todo',
            isCompleted:false
        }
    ]
})
