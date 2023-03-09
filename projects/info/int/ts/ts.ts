/*
  TYPE: 
    1. string
    2. number 
    3. boolean
    4. null // obj - отсутствие объектного значения
    5. undefained 
    6. object
    7*. symbol

	void - ничего не возвращает (ничего или игнорирование ответа)
	never - возвращает ошибку или постоянно выполняется (throw err or infinity)
	union - несколько типов одновременно (string | number)
	
	interface
	enum 
	type

	classic structure in an typescript

	(function(Directions){
		...
	})(Direction || (Directions = {}));
*/

/*
	const obj = {
		name: 'Dima',
		age: 24,
		option: 'easy' | 'hard' = 'easy'
	}
  // PROPS => const test = ({obj: {name: string, age?: number}}): void | string => {
	const test = (obj: {name: string, age?: number}) => {
		return `My name: ${obj.name}`
	}
*/

/*
  import PropTypes from 'prop-types'

  Name.propTypes = {
    function: PropTypes.func.isRequired
  }
*/

/*
	EX: 
		const createProf = (name: string, ...skills:Array<any>):string => `${name}, skills:${skills}`

		type Person = {
				name: string, 
				age: number | string,
				nickName?: string,
				getPass?: () => string
		}

		const user: Person = {
				name: 'Dima', 
				age: 24,
				nickName: 'webDev'
		}

		const user2: Person = {
				name: 'Alex',
				age: 23,
				getPass():string {
						return `${this.name} - ${this.age}` 
				}
		}

	EX: class 

	class User {
		name: string; // public name: string;
		private nickName: string;
		protected age: number = 20;
		redonly pass: string || number;

		constructor (name: string, nickNmae: string, age: number, pass: string || number) {
			this.name = name;
			this.age = age;
			this.nickName = nickName;
			this.pass = pass;
		}

		//or 

		constructor (
			public name: string;
			private age: number;
			static secret: number;
		)
		{
			this.name = name;
			this.age = age;
		}

		setAge(age: number) {
			this.age = age;
		}

		set myAge(age: number) {
			this.age = age;
		}

		getInfo(): string {
			return `${this.name}`
		}
	}

	const user = new User('Dima')
	user.getInfo()

	class OOP_______________ 
	class User {
    static pass: number = 123;

    constructor(
        public name: string
    ){
        this.name = name;
    }

    getPass() {
        console.log(`${this.name} - ${User.pass}`)
    }
	}
	const user = new User('Dima');
	user.getPass()


	
*/

