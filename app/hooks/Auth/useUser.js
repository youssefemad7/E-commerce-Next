// hooks/useUser.js
"use client";

import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../api/user";

export const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    // staleTime: 1000 * 60 * 5, // 5 دقائق قبل إعادة الجلب
  });
};
