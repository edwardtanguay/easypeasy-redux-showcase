import { useTypedStoreState } from "../store/hooks"

export const PageProfile = () => {
	const {persisted, userLevel} = useTypedStoreState(state => state.mainModel);
	return (
		<>
		<p>User name: {persisted.userName}</p>
		<p>User level: {userLevel}</p>
		</>
	)
}
