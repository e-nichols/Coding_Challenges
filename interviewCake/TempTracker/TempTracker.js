class TempTracker {
    constructor () {
        this.tempHistory = new Array();
        this.modeHashMap = new Array(110);
        this.modeHashMap.fill(0);

        //set to negative values because we know actual values in the range of [0..110];
        this.max = -1;
        this.min = 1000;
        this.mean = -1;
        this.mode = -1;
    }

    insert(t) {
        if(t>110 || t<0){
            throw Error("Temperature out of range!");
            return;
        }
        else{
            this.tempHistory.push(t);
        }

        this.updateValues(t);
    }

    updateValues(t) {
        //check to see if we have a new max or min.
        this.max = Math.max(t,this.max);
        this.min = Math.min(t,this.min);

        //update the mean
        var len = this.tempHistory.length;
        var sum = this.tempHistory.reduce((x,y) => x+y);
        this.mean = sum/len;

        //update the mode hashMap, and see if we have a new mode.
        console.log(`updating mode hash map position ${t}`);
        this.modeHashMap[t] = this.modeHashMap[t] + 1;
        console.log(this.modeHashMap);

        this.mode = this.modeHashMap.indexOf(Math.max(...this.modeHashMap));

    }

    getMax(){
        return this.max;
    }

    getMin(){
        return this.min;
    }

    getMean(){
        return this.mean;
    }

    getMode(){
        return this.mode;
    }

    prettyPrint(){
        console.log( `CURRENT VALUES\n MAX: ${this.max}\n MIN: ${this.min}\n MEAN: ${this.mean}\n MODE: ${this.mode}\n TEMP HISTORY: ${this.tempHistory}` );
    }
}

//My example data = [0,1,5,7,0,100,54,7,7,7]
var myTempTracker = new TempTracker();
myTempTracker.insert(0);
myTempTracker.insert(1);
myTempTracker.insert(5);
myTempTracker.insert(7);
myTempTracker.insert(0);

myTempTracker.prettyPrint();
myTempTracker.insert(100);
myTempTracker.insert(54);
myTempTracker.insert(7);
myTempTracker.insert(7);
myTempTracker.insert(7);

myTempTracker.prettyPrint();
