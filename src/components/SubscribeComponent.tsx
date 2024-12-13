import React, { useState } from "react";
import { AppDispatch, RootState } from "../redux";
import { useDispatch, useSelector } from "react-redux";
import { addSubscribe } from "../redux/slices/SubscribeSlice";
import Swal from "sweetalert2";

const SubscribeComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.subscribe);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        await dispatch(addSubscribe({ email })).unwrap();
        setEmail(""); // Clear the input field
        Swal.fire({
          icon: "success",
          title: "Thank you!",
          text: "You have successfully subscribed to our newsletter.",
        });
      } catch (err: any) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message || "There was an error subscribing.",
        });
      }
    }
  };

  return (
    <section
      className={`bg-[url(../subscribeBanner.jpg)] bg-cover bg-no-repeat bg-center `}
    >
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-end">
          <div className="flex-row space-y-3">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get more discount <br /> Off your order
            </h1>

            <p className="mt-1.5 text-sm text-white">Join our mailing list</p>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-3 mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border rounded md:w-80"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
            </form>
            {error && <div className="text-red-500 text-sm">{error}</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeComponent;
