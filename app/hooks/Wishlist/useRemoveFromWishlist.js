import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromWishlist } from "../../api/wishlist";
import { toast } from "react-hot-toast";

export const useRemoveFromWishlist = (userId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ productId }) => removeFromWishlist(productId, userId),
    onSuccess: () => {
      queryClient.invalidateQueries(["Wishlist", userId]);
      toast.success("Removed Successfully From Wishlist❌");
    },
    onError: () => {
      toast.error("Removed UnSuccessful From Wishlist");
    },
  });
};
