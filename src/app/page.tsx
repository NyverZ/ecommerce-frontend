import { Button } from "src/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 ">
      <h1 className="text-4xl font-bold ">ahhh</h1>
      <Button variant="outline">click me!</Button>
      <Button variant="ghost">click</Button>
      <Button variant="secondary">click me!</Button>
      <Button variant="link">click</Button>
      <Button variant="destructive">click me!</Button>
    </div>
  );
}
