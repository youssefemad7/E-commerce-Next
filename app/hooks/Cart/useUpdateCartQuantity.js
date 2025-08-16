"use client";

import { updateCartQuantity } from "../../api/cart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export const useUpdateCartQuantity = (userId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ products }) => {
      // تحديث كل المنتجات
      for (const p of products) {
        await updateCartQuantity(p.productId, userId, p.quantity);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["Cart", userId]);
      toast.success("Cart Updated Successfully 🛒");
    },
    onError: () => {
      toast.error("Failed To Update Cart ❌");
    },
  });
};
