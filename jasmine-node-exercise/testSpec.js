var getBio= require('./jasmine-node.js');
/*var vari= getBio('name',12);
console.log(vari);*/

describe('Test', function(){
        xit('should to get the biography', function(){
            var actual = getBio('test1',12);
			//Steps
            var expRes = 'Hi, my name is test1,I am 12 years old and I am a nice guy';
            //Validation
            expect(actual).toEqual(expRes);
        });
		xit('should to get an error',function()
		{
			expect(function(){getBio('test1');}).toThrow(new Error('Need name and age to provide a biography'));
		});
		it('should get the other error',function()
		{
			expect(function(){getBio('test1',-1);}).toThrow(new Error('Invalid age'));
		});
		it('should compare the type of var',function()
		{
			var actual= getBio('test1',12);
			var expected='string';
			expect(typeof(actual)).toEqual(expected);
		});
	});