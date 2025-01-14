import { action, Action } from "easy-peasy";

export interface MainModel {

	// state
	message: string;
	userLevel: number;

	// actions
	setUserLevel: Action<this, number>;
}

export const mainModel: MainModel = {

	// state
	message: 'This text comes from the main model.',
	userLevel: 0,

	// actions
	setUserLevel: action((state, level) => {
		state.userLevel = level;
	})
};
