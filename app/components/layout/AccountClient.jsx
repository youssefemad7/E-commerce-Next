"use client";
import { useRouter } from "next/navigation";
import { useUser } from "../../hooks/Auth/useUser";
import { updateUserData } from "../../api/user";
import { toast } from "react-hot-toast";
import Loading from "../ui/Loading";

function AccountClient() {
  const { data: user, isLoading, isError, error } = useUser();
  const router = useRouter();

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <p className="text-red-500">Failed to load user data: {error.message}</p>
    );

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const firstName = formData.get("firstName") || "";
    const lastName = formData.get("lastName") || "";
    const currentPassword = formData.get("currentPassword") || "";
    const newPassword = formData.get("newPassword") || "";
    const confirmPassword = formData.get("confirmPassword") || "";

    // تحقق من الباسورد الحالي إذا في تغييرات حساسة
    if (newPassword && !currentPassword) {
      toast.error(
        "You must enter your current password to update email or password"
      );
      return;
    }

    // تحقق من تطابق الباسورد الجديد
    if (newPassword && newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      await updateUserData({
        uid: user.uid,
        firstName,
        lastName,

        newPassword: newPassword || null,
        currentPassword: currentPassword || null,
      });
      toast.success("Profile updated successfully!");
      router.push("/");
    } catch (err) {
      console.error(err);
      // رسائل أخطاء Firebase الشائعة
      if (err.code === "auth/invalid-email")
        toast.error("Invalid email address");
      else if (err.code === "auth/email-already-in-use")
        toast.error("Email already in use");
      else if (err.code === "auth/weak-password")
        toast.error("Password is too weak");
      else toast.error(err.message || "Failed to update profile!");
    }
  };

  return (
    <div className="myaccountmar">
      <div className="flex justify-between px-[5%] py-10 mt-[3%] mb-[6%] pl-[13%]">
        <div>
          Home / <span className="font-bold">My Account</span>
        </div>
        <div>
          <h1>Welcome! {user?.displayName}</h1>
        </div>
      </div>

      <div className="grid grid-cols-7 pl-[13%] px-[5%] py-10 myaccount">
        {/* Sidebar */}
        <aside className="col-span-2 w-64 pr-8 centeraccount">
          <h3 className="font-semibold mb-4 text-foreground">
            Manage My Account
          </h3>
          <ul className="space-y-2 text-sm pl-5">
            <li className="text-red-500 cursor-pointer font-medium">
              My Profile
            </li>
            <li className="text-gray-500 hover:text-red-500 cursor-pointer">
              Address Book
            </li>
            <li className="text-gray-500 hover:text-red-500 cursor-pointer">
              My Payment Options
            </li>
          </ul>
          <h3 className="font-semibold mt-8 mb-4 text-foreground">My Orders</h3>
          <ul className="space-y-2 text-sm pl-5">
            <li className="text-gray-500 hover:text-red-500 cursor-pointer">
              My Returns
            </li>
            <li className="text-gray-500 hover:text-red-500 cursor-pointer">
              My Cancellations
            </li>
          </ul>
          <h3 className="font-semibold mt-8 mb-4 text-foreground">
            My Wishlist
          </h3>
        </aside>

        {/* Main Form */}
        <div className="col-span-5 px-8 shadow-xl rounded-md">
          <h2 className="text-red-500 text-lg font-bold mb-6">
            Edit Your Profile
          </h2>
          <form
            onSubmit={handleSaveChanges}
            className="bg-background p-8 space-y-5"
          >
            {/* Name */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="flex text-sm font-medium text-black">
                  First Name
                </label>
                <input
                  name="firstName"
                  defaultValue={user?.displayName.split(" ")[0]}
                  placeholder="First Name"
                  className="border bg-muted focus:border-foreground focus:ring-1 focus:ring-foreground outline-none p-3 rounded w-full text-sm"
                />
              </div>
              <div>
                <label className="flex text-sm font-medium text-black">
                  Last Name
                </label>
                <input
                  name="lastName"
                  defaultValue={user?.displayName.split(" ")[1] || ""}
                  placeholder="Last Name"
                  className="border bg-muted focus:border-foreground focus:ring-1 focus:ring-foreground outline-none p-3 rounded w-full text-sm"
                />
              </div>
              {/* Email & Address */}
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="flex text-sm font-medium text-black">
                    Email
                  </label>
                  <input
                    name="email"
                    defaultValue={user?.email}
                    disabled
                    placeholder={user.email}
                    className="border bg-muted focus:border-foreground focus:ring-1 focus:ring-foreground outline-none p-3 rounded w-full text-sm cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            {/* Password Changes */}
            <h3 className="font-semibold text-gray-800 mt-6">
              Password Changes
            </h3>
            <input
              type="password"
              name="currentPassword"
              placeholder="Current Password"
              className="border bg-muted focus:border-foreground focus:ring-1 focus:ring-foreground outline-none p-3 rounded w-full text-sm"
            />
            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              className="border bg-muted focus:border-foreground focus:ring-1 focus:ring-foreground outline-none p-3 rounded w-full text-sm"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm New Password"
              className="border bg-muted focus:border-foreground focus:ring-1 focus:ring-foreground outline-none p-3 rounded w-full text-sm"
            />

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-8">
              <button
                type="button"
                className="text-foreground hover:text-gray-700 text-sm cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 transition-colors text-white px-8 py-4 rounded text-sm cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AccountClient;
