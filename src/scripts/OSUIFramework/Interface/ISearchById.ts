// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace OSUIFramework.Interface {
	/**
	 * Defines the interface for objects with multiple DOM identifiers
	 *
	 * @export
	 * @interface ISearchById
	 */
	export interface ISearchById {
		/**
		 * Validates if object matched with the given id
		 *
		 * @param {string} id
		 * @return {*}  {boolean}
		 * @memberof ISearchById
		 */
		equalsToID(id: string): boolean;
	}
}
