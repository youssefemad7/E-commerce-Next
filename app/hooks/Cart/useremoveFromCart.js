import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromCart } from "../../api/cart";
import { toast } from "react-hot-toast";

export const useRemoveFromCart = (userId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ productId }) => removeFromCart(productId, userId),
    onSuccess: () => {
      queryClient.invalidateQueries(["Cart", userId]);
      toast.success("Removed From Cart 🗑️");
    },
    onError: () => {
      toast.error("Failed To Remove From Cart ❌");
    },
  });
};
