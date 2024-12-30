import React, { useState } from "react";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head, router } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Welcome() {
  const [formState, setFormState] = useState({
    start: "",
    end: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.post("/sleeps", formState, {
      onSuccess: () => {
        console.log("Sleep record added successfully");
      },
    });
  };

  return (
    <DefaultLayout>
      <Head title='Welcome' />
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <Card className='w-[350px]'>
          <CardHeader>
            <CardTitle>Create Sleep</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className='grid w-full items-center gap-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='start'>Start</Label>
                  <Input
                    id='start'
                    placeholder='Start of your sleep'
                    required
                    type='time'
                    value={formState.start}
                    onChange={handleChange}
                  />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='end'>End</Label>
                  <Input
                    id='end'
                    placeholder='End of your sleep'
                    required
                    type='time'
                    value={formState.end}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <CardFooter className='flex justify-between mt-4'>
                <Button
                  type='button'
                  variant='outline'
                  onClick={() => setFormState({ start: "", end: "" })}
                >
                  Cancel
                </Button>
                <Button type='submit'>Add Sleep</Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </DefaultLayout>
  );
}
