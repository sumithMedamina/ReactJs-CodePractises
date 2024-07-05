

export class UseQueue
{
    data =[];

    enqueue(value){
        this.data.push(value);
    }

    dequeue(){
        this.data.shift();
    }

    size(){
        return this.data.length;
    }
}