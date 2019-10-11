class Test
{
    createRandomNumber(start, range)
        {
            var number = function(){
                let createNumber = Math.floor(Math.Random()* range) + start;
        
                while (createNumber > range) {
                    createNumber = Math.floor(Math.Random()* range) + start;
                }
            
                return console.log(createNumber)
                
            }
    }
}

export default Test