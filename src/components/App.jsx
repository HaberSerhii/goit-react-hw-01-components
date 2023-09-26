import user from 'dates/user.json'
import { Profile } from './Profile/Profile';



export const App = () => {
  return (
    <>
      <Profile user={user} />
    </>
  );
};
