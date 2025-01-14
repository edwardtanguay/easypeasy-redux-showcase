import { useTypedStoreActions, useTypedStoreState } from "../store/hooks"

export const PageWelcome = () => {
	const { message, userName, userLevel } = useTypedStoreState((state) => state.mainModel);
	const {setUserLevel, setUserName} = useTypedStoreActions(actions => actions.mainModel)

	return (
		<>
		<p>{message}</p>
		<p>user name: {userName}</p>
		<p>change user name: <input value={userName} className="w-[9rem] px-1" onChange={(e) => setUserName(e.target.value)}/></p>
		<hr/>
		<p>user level: {userLevel}</p>
		<p>change user level: <input value={userLevel} className="text-right w-[4rem] px-1" onChange={(e) => setUserLevel(Number(e.target.value))}/></p>
		</>
	)
}