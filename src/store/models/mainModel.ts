import { action, Action, persist } from "easy-peasy";

export interface MainModel {

	// state
	message: string;
	persisted: {
		userName: string;
	}
	userLevel: number;

	// actions
	setUserLevel: Action<this, number>;
	setUserName: Action<this, string>;
}

export const mainModel: MainModel = {

	// state
	message: 'This text comes from the main model.',
	persisted: persist (
		{
			userName: '',
        }, 
		{
			allow: ['userName']
		}
	),
	userLevel: 0,

	// actions
	setUserLevel: action((state, level) => {
		state.userLevel = level;
	}),
	setUserName: action((state, name) => {
		state.persisted.userName = name;
	})
};
