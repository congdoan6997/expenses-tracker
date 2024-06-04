import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/")({
  component: Index,
});

function Index() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Total spent</CardTitle>
        <CardDescription>The total amount of your expenses</CardDescription>
      </CardHeader>
      <CardContent>123</CardContent>
    </Card>
  );
}
