import { action, Action } from "easy-peasy";

export interface MainModel {

	// state
	message: string;
	userName: string;
	userLevel: number;

	// actions
	setUserLevel: Action<this, number>;
	setUserName: Action<this, string>;
}

export const mainModel: MainModel = {

	// state
	message: 'This text comes from the main model.',
	userName: '',
	userLevel: 0,

	// actions
	setUserLevel: action((state, level) => {
		state.userLevel = level;
	}),
	setUserName: action((state, name) => {
		state.userName = name;
	})
};
