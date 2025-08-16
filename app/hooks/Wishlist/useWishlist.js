"use client";

import { useQuery } from "@tanstack/react-query";
import { getWishlist } from "../../api/wishlist";

export const useWishlist = (userId) => {
  return useQuery({
    queryKey: ["Wishlist", userId],
    queryFn: () => getWishlist(userId),
    enabled: !!userId, // مينفعش يجيب لو مفيش يوزر
  });
};
