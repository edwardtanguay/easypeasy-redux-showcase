import { useTypedStoreState } from "../store/hooks"

export const PageProfile = () => {
	const {userName, userLevel} = useTypedStoreState(state => state.mainModel);
	return (
		<>
		<p>User name: {userName}</p>
		<p>User level: {userLevel}</p>
		</>
	)
}
