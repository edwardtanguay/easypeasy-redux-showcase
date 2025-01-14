import { useTypedStoreActions, useTypedStoreState } from "../store/hooks"

export const PageWelcome = () => {
	const { message, userLevel } = useTypedStoreState((state) => state.mainModel);
	const {setUserLevel} = useTypedStoreActions(actions => actions.mainModel)

	return (
		<>
		<p>{message}</p>
		<p>user level: {userLevel}</p>
		<p>change user level: <input value={userLevel} className="text-right w-[4rem] px-1" onChange={(e) => setUserLevel(Number(e.target.value))}/></p>
		</>
	)
}