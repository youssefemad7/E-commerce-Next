import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToWishlist } from "../../api/wishlist";
import { toast } from "react-hot-toast";

export const useAddToWishlist = (userId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ product }) => addToWishlist(product, userId),
    onSuccess: () => {
      queryClient.invalidateQueries(["Wishlist", userId]);
      toast.success("Added Successfully To Wishlist❤️");
    },
    onError: () => {
      toast.error("Added UnSuccessful To Wishlist");
    },
  });
};
