/*
  TYPE: 
    1. string
    2. number 
    3. boolean
    4. null // obj - отсутствие объектного значения
    5. undefained 
    6. object
    7*. symbol
    8*. bigint

	void - инчего не возвращает
	never - возвразает ошибку или постоянно выполняется

	enum 
	type

	classic structure in an typescript

	(function(Directions){
		...
	})(Direction || (Directions = {}));
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

*/
