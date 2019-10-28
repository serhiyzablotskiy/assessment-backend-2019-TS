import { User } from "./models";
import { IUser } from "./models/User";

export async function seedUsers() {
  await User.deleteMany({});

  const user1: IUser = new User({
    email: "john.doe@example.com",
    name: "John Doe",
    role: "Engineer"
  });

  const user2: IUser = new User({
    email: "jane.doe@example.com",
    name: "Jane Doe",
    role: "Supervisor"
  });

  await user1.save();
  await user2.save();

  console.log("INFO: User DB seeded");
}
