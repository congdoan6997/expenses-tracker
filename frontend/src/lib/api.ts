import { hc } from "hono/client";
import { type ApiRoutes } from "@server/app";
import { queryOptions } from "@tanstack/react-query";

const client = hc<ApiRoutes>("/");

export const api = client.api;

export async function getAllExpenses() {
  await new Promise((r) => setTimeout(r, 3000));
  const res = await api.expenses.$get();
  if (!res.ok) {
    throw new Error("server error");
  }
  const data = await res.json();
  return data;
}
export const getAllExpensesQueryOptions = queryOptions({
  queryKey: ["get-all-expenses"],
  queryFn: getAllExpenses,
  staleTime: 1000 * 60 * 5,
});

async function getCurrentUser() {
  const res = await api.me.$get();
  if (!res.ok) {
    throw new Error("server error");
  }
  const user = await res.json();
  return user;
}

export const userQueryOptions = queryOptions({
  queryKey: ["get-current-user"],
  queryFn: getCurrentUser,
  staleTime: Infinity,
});
// export async function createExpense({ value }: { value: CreateExpense }) {
//   await new Promise((r) => setTimeout(r, 2000));
//   const res = await api.expenses.$post({ json: value });
//   if (!res.ok) {
//     throw new Error("server error");
//   }

//   const newExpense = await res.json();
//   return newExpense;
// }

// export const loadingCreateExpenseQueryOptions = queryOptions<{
//   expense?: CreateExpense;
// }>({
//   queryKey: ["loading-create-expense"],
//   queryFn: async () => {
//     return {};
//   },
//   staleTime: Infinity,
// });
