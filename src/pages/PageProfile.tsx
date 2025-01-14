import { useTypedStoreState } from "../store/hooks"

export const PageProfile = () => {
	const {userLevel} = useTypedStoreState(state => state.mainModel);
	return (
		<p>User level: {userLevel}</p>
	)
}
