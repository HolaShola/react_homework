class Converter {
    static createConverter(obj) {
        if(obj.from === 'cm' && obj.to === 'mm') {
            return new Converter_one();
        } else if(obj.from === 'km' && obj.to === 'm') {
            return new Converter_two();
        } else if(obj.from === 'ml' && obj.to === 'dcm') {
            return new Converter_three();
        } else console.log('Error');
    }
}

		// from 'cm' to 'mm'
		class Converter_one extends Converter {
			convert(value) {
				console.log(value * 10);
			}
		}

		//from 'km' to 'm'
		class Converter_two extends Converter {
			convert(value) {
				console.log(value * 1000); //километры в метры
			}
		}

		//from 'ml' to 'dcm'
		class Converter_three extends Converter {
			convert(value) {
				//return
				console.log(value * 18600); //мили в дециметры
			}
		}

		let conversion1 = {
			from: 'cm',
			to:   'mm'
		};

		let conversion2 = {
			from: 'km',
			to:   'm'
		};

		let conversion3 = {
			from: 'ml',
			to:   'dcm'
		};

		let c = Converter.createConverter(conversion1).convert(11);
		Converter.createConverter(conversion2).convert(13);
		Converter.createConverter(conversion3).convert(1);