"use client";

import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../api/cart";

export const useCart = (userId) => {
  return useQuery({
    queryKey: ["Cart", userId],
    queryFn: () => getCart(userId),
    enabled: !!userId, // مينفعش يجيب لو مفيش يوزر
  });
};
