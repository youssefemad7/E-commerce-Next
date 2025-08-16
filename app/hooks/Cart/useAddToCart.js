import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "../../api/cart";
import { toast } from "react-hot-toast";

export const useAddToCart = (userId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ product, quantity }) => addToCart(product, userId, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries(["Cart", userId]);
      toast.success("Added Successfully To Cart❤️");
    },
    onError: () => {
      toast.error("Added UnSuccessful To Cart");
    },
  });
};
