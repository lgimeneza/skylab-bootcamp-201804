/**
 * Common interface for session and local storage
 * 
 * Provides accessors for storing and retrieving any JSON-compliance type items
 * 
 * @example
 * 
 * Xtorage.session.setObject('user', { id: '123abc456edf' })
 *
 * const user = Xtorage.session.getObject('user')
 * 
 * console.log(user.id) // -> "123abc456edf"
 * 
 */
class Xtorage {
	/**
	 * Creates an instance
	 * 
	 * @param {Storage} storage - An instance of Storage class (e.g. session or local storage in browser)
	 */
	constructor(storage) {
		if (!(storage instanceof Storage)) throw TypeError('provided storage is not an instance of Storage')

		this.storage = storage
	}

	/**
	 * Stores a value in storage
	 * 
	 * @param {string} key - Identifies the value in storage
	 * @param {any} value - The value to be stored
	 */
	set(key, obj) {
		this.storage.setItem(key, JSON.stringify(obj))
	}

	/**
	 * Retrieves a value from storage
	 * 
	 * @param {string} key - The identifier of the value in storage 
	 * 
	 * @returns {any} - The stored value
	 */
	get(key) {
		return JSON.parse(this.storage.getItem(key))
	}

	/**
	 * Removes a value from storage
	 * 
	 * @param {string} key - The identifier of the value in storage
	 */
	remove(key) {
		return this.storage.removeItem(key)
	}

	/**
	 * Session storage singleton
	 */
	static session = new Xtorage(sessionStorage)

	/**
	 * Local storage singleton
	 */
	static local = new Xtorage(localStorage)
}

export default Xtorage