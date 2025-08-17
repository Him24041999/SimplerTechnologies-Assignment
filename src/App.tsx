import Navbar from "./Navbar";
import SignUp from "./SignUp";
import UserCard from "./UserCard";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="p-6 space-y-6">
        <SignUp />
        <UserCard name="Himanshu Randad" email="randadhimanshu@gmail.com" />
      </div>
    </div>
  );
}
