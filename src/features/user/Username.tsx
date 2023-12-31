import { useSelector } from "react-redux/es/exports";
import { RootState } from "../../store";

const Username: React.FC = () => {
  const username = useSelector((state: RootState) => state.user.username);

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
};

export default Username;
