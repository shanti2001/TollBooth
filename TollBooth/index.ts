type char = 'p'|'n';
class TollBooth{
    private static carCount=0;
    private static money=0;
    constructor(){
        TollBooth.carCount = 0;
        TollBooth.money=0;
    }
    private static payingCar(){
        TollBooth.carCount+=1;
        TollBooth.money+=50;
    }
    private static nopayCar(){
        TollBooth.carCount+=1;
    }
    sample(... arr :char[]){
        for(let i=0;i<arr.length;i++){
            if(arr[i]=='p'){
                TollBooth.payingCar();
            }
            else{
                TollBooth.nopayCar();
            }
        }
    }
    public display(){
        console.log(`Total number of car : ${TollBooth.carCount}\nTotal money : ${TollBooth.money}`);
    }
}

let n1=new TollBooth();
n1.sample('p','p','n','p','n');
n1.display();

let n2=new TollBooth();
n2.sample('p','p','n','p','p','n','p');
n2.display();

let n3=new TollBooth();
n3.sample('p','p','n','p','n','p','p','p','n');
n3.display();
