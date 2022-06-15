
export class MyArr {
    constructor(...text){
        this.length = 0;
        let i = 0;
        this.arr=[]
        while(text[i] !== undefined){
            this.arr.push(text[i])
            i++;
            this.length++
        }
    }
    arrayPop(){
        if(this.length == 0){
            return undefined
        }else {
            this.length--
            return this.arr.pop()
        }
    }
    arrayPush(...elem){
        this.pushLength = 0;
        let j = 0;
        while(elem[j] !== undefined){
            this.arr.push(elem[j]);
            j++;
            this.pushLength++
        }
        this.length += this.pushLength
        return this.arr
    }
}



let studentNames = [
    {
        name : "Tornike",
        lastName : "Samkharadze"
    },
    {
        name : "Metthew",
        lastName : "Smith"
    }
]


export function letsTry(){
    setTimeout(()=>{
        let output = ""
        studentNames.forEach((student)=>{
            output +=   `<ul><li> Student Fullname : ${student.name} ${student.lastName}</li></ul>`;
        })
        document.body.innerHTML = output;
    },1000)
}


